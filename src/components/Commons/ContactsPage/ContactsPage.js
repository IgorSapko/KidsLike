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
     Photo } from './ContactsPage.modules';
import FB from './icons/FB';
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
                                             <FB src={item.Facebook}/>
                                             <GitHub src={item.GitHub}/>
                                             <LinkedIn src={item.LinkedIn} />
                                           </Icons>
                                        </Cards>
                                    )
                              })} 
                    </CardWrapper>            
               </Container>
            )
     }