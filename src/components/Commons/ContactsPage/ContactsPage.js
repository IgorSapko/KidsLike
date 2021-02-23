import React from 'react';
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
     IconWrapper } from './ContactsPage.modules';
import Facebook from './icons/Facebook';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

import items from './item.json';

     export default function Contacts() {
            return (
               <Container>
                    <MainText>
                         <OurTeam>Наша команда</OurTeam>
                         <AlwaysReady>Всегда готовы к новым вызовам!</AlwaysReady>
                    </MainText>
                    <CardWrapper>
                              {items.map(item => {
                                    return (
                                        <Cards>
                                           <Photo src={item.img}></Photo>
                                           <Name>{item.name}</Name>
                                           <Qualification>{item.qualification}</Qualification>
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