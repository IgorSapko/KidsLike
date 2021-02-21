import React from 'react';
import styled from 'styled-components';
import photoAK from './img/AK.jpg';
import photoST from './img/ST.jpg';
import photoMM from './img/MM.jpg';
import photoOS from './img/OS.jpg';
import photoEK from './img/EK.jpg';
import photoISt from './img/ISt.jpg';
import photoIS from './img/IS.jpg';
import photoVD from './img/VD.jpg';
import photoED from './img/ED.jpg';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const MainText = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const OurTeam = styled.p`
   
  margin-top: 80px;
  width: 403px;
  height: 36px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
`;

const AlwaysReady = styled.p`
  margin-top: 10px;  
  width: 403px;
  height: 22px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.04em;
`;

const CardWrapper = styled.div`
  margin-bottom: 80px;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px 30px 0px 30px;
  @media (min-width: 768px) {
    width: 100%;
    height: auto;
  @media (min-width: 1280px) {
    width: 100%;
    height: auto;
}
`;

const Cards = styled.div`
  margin: 20px 10px 0px 10px;
  width: 280px;
  height: 370px;
  border-radius: 6px;
  box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
`;
///////////////////////////////////////phtos/////////////////////////
const PhotoAK = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoAK});
  border-radius: 6px 6px 0 0;
`;
const PhotoST = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoST});
  border-radius: 6px 6px 0 0;
`;

const PhotoMM = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoMM});
  border-radius: 6px 6px 0 0;
`;

const PhotoOS = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoOS});
  border-radius: 6px 6px 0 0;
`;

const PhotoEK = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoEK});
  border-radius: 6px 6px 0 0;
`;

const PhotoISt = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoISt});
  border-radius: 6px 6px 0 0;
`;

const PhotoIS = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoIS});
  border-radius: 6px 6px 0 0;
`;

const PhotoVD = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoVD});
  border-radius: 6px 6px 0 0;
`;

const PhotoED = styled.img`
  width: 280px;
  height: 246px;
  background-image: url(${photoED});
  border-radius: 6px 6px 0 0;
`;

///////////////////////////////////////phtos/////////////////////////

const Name = styled.p`
  width: 240px;
  height: 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 20px 0px 6px 20px; 
`;

const Qualification = styled.p`
  width: 240px;
  height: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #858598;
  margin: 0px 0px 6px 20px;
`;

const Description = styled.p`
  width: 240px;
  height: 45px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  margin: 0 0 0 20px;
`

export default function Contacts() {
  return (
    <Container>
      <MainText>
           <OurTeam>Наша команда</OurTeam>
           <AlwaysReady>Всегда готовы к новым вызовам!</AlwaysReady>
      </MainText>
      <CardWrapper>
      <Cards>
           <PhotoEK/>
           <Name>Элина Коваленко</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
            <PhotoAK/>
           <Name>Андрей Ковальчук</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoVD/>
           <Name>Виталий Дерда</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoMM/>
           <Name>Михаил Матей</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoST/>
           <Name>Сергей Тымчук</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoISt/>
           <Name>Илона Стрыжко</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoIS/>
           <Name>Игорь Сапко</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoOS/>
           <Name>Ольга Шостак</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      
      <Cards>
           <PhotoED/>
           <Name>Евгений Давиденко</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
      <Cards>
           <PhotoED/>
           <Name>Михаил Коболев</Name>
           <Qualification>JavaScript FrontEnd Developer</Qualification>
           <Description>Lorem ipsum ;ava;wv cmspmcp 'avn'fndvdfjo asvbaebcsbeud kjsdbva uvuvy cdsccdxc nooubhv</Description>
      </Cards>
    </CardWrapper>
    </Container>
  )
}