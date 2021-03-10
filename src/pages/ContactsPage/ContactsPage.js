import React, { useState, useEffect } from 'react';
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
	LinkedImg
} from './ContactsPage.styles';
import Facebook from '../../img/Facebook.svg';
import GitHub from '../../img/GitHub.svg';
import LinkedIn from '../../img/LinkedIn.svg';
//

export default function Contacts() {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		axios
			.get(`https://kids-like-backend-cloud.herokuapp.com/api/team/contacts`)
			.then(({ data }) => {
				setContacts(data);
			});
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
										<FacebookImg src={Facebook}/>
									</IconWrapper>
									<IconWrapper href={item.socialLinks[0].link}>
										<GitHubImg src={GitHub}/>
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
