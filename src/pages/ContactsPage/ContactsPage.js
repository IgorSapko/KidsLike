import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
	Container,
	MainText,
	OurTeam,
	AlwaysReady,
	CardWrapper,
	Cards,
	Name,
	Qualification,
	Icons,
	Photo,
	IconWrapper,
	FacebookImg,
	GitHubImg,
	LinkedImg,
} from './ContactsPage.styles';
import loaderActions from '../../redux/loader/loaderActions';
import Facebook from '../../img/Facebook.svg';
import GitHub from '../../img/GitHub.svg';
import LinkedIn from '../../img/LinkedIn.svg';

//

export default function Contacts() {
	const [contacts, setContacts] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loaderActions.contactsRequest());
		axios
			.get(`https://kids-like-backend-cloud.herokuapp.com/api/team/contacts`)
			.then(({ data }) => {
				setContacts(data);
			});
		dispatch(loaderActions.contactsSuccess());
	}, []);

	console.log(contacts);
	return (
		<>
			<Container>
				<MainText>
					<OurTeam>Наша команда</OurTeam>
					<AlwaysReady>Всегда готовы к новым вызовам!</AlwaysReady>
				</MainText>
				<CardWrapper>
					{contacts.map(item => {
						return (
							<Cards key={item.socialLinks[0].link}>
								<Photo src={item.avatar}></Photo>

								<Name>{item.fullName}</Name>
								<Qualification>{item.position}</Qualification>
								<Icons>
									<IconWrapper href={item.socialLinks[1].link}>
										{/* <Facebook /> */}
										<FacebookImg src={Facebook} />
									</IconWrapper>
									<IconWrapper href={item.socialLinks[0].link}>
										<GitHubImg src={GitHub} />
									</IconWrapper>
									<IconWrapper href={item.socialLinks[2].link}>
										<LinkedImg src={LinkedIn} />
									</IconWrapper>
								</Icons>
							</Cards>
						);
					})}
				</CardWrapper>
			</Container>
		</>
	);
}
