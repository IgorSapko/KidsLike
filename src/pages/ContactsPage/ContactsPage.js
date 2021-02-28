import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Container, 
     MainText, 
     OurTeam, 
     AlwaysReady, 
     CardWrapper, 
     Cards, 
     Name, 
     Qualification, 
     Icons, 
     Photo,
     IconWrapper ,
     PhotoWrapper} from './ContactsPage.modules';
import Facebook from './icons/Facebook';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import сontactsSelector from '../../redux/contacts/contactsSelector';


     export default function Contacts() {
      const contacts = useSelector(сontactsSelector.getContacts);
            return (
               <Container>
                    <MainText>
                         <OurTeam>Наша команда</OurTeam>
                         <AlwaysReady>Всегда готовы к новым вызовам!</AlwaysReady>
                    </MainText>
                    <CardWrapper>
                              {contacts.map(item => {
                                    return (
                                        <Cards>
                                         
                                           <Photo src={item.avatar}></Photo>
                                         
                                           <Name>{item.fullName}</Name>
                                           <Qualification>{item.position}</Qualification>
                                           <Icons>
                                           <IconWrapper href={item.Facebook}>
                                                  <Facebook />
                                             </IconWrapper>
                                             <IconWrapper href={item.GitHub}>
                                                  <GitHub/>
                                             </IconWrapper>
                                             <IconWrapper href={item.LinkedIn}>
                                                  <LinkedIn />
                                             </IconWrapper>
                                           </Icons>
                                        </Cards>
                                    )
                              })} 
                    </CardWrapper>            
               </Container>
            )
     }