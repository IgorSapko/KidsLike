//Core
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Redux
import { useDispatch } from 'react-redux';
import loaderActions from '../../redux/loader/loaderActions';
//Styles
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

export default function Contacts() {
	const [contacts, setContacts] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loaderActions.contactsRequest());

		axios
			.get(`https://kids-like-backend-cloud.herokuapp.com/api/team/contacts`)
			.then(({ data }) => setContacts(data));

		dispatch(loaderActions.contactsSuccess());
	}, [dispatch]);

	return (
		<Container>
			<MainText>
				<OurTeam>Наша команда</OurTeam>
				<AlwaysReady>Всегда готовы к новым вызовам!</AlwaysReady>
			</MainText>

			<CardWrapper>
				{contacts.map(({ socialLinks, avatar, fullName, position }) => (
					<Cards key={avatar}>
						<Photo src={avatar}></Photo>

						<Name>{fullName}</Name>

						<Qualification>{position}</Qualification>

						<Icons>
							<IconWrapper href={socialLinks[1].link}>
								<FacebookImg />
							</IconWrapper>

							<IconWrapper href={socialLinks[0].link}>
								<GitHubImg />
							</IconWrapper>

							<IconWrapper href={socialLinks[2].link}>
								<LinkedImg />
							</IconWrapper>
						</Icons>
					</Cards>
				))}
			</CardWrapper>
		</Container>
	);
}
