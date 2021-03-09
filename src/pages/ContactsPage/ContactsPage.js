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
} from './ContactsPage.modules';
import Facebook from './icons/Facebook';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
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
										<Facebook />
									</IconWrapper>
									<IconWrapper href={item.socialLinks[0].link}>
										<GitHub />
									</IconWrapper>
									<IconWrapper href={item.socialLinks[2].link}>
										<LinkedIn />
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
