import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

export const MainText = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const OurTeam = styled.p`
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

export const AlwaysReady = styled.p`
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

export const CardWrapper = styled.ul`
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

export const Cards = styled.li`
  margin: 20px 10px 0px 10px;
  width: 280px;
  height: 370px;
  border-radius: 6px;
  box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
  list-style: none;
`;

export const Photo = styled.img`
  width: 280px;
  height: 246px;
  border-radius: 6px 6px 0 0;
`;

export const Name = styled.p`
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

export const Qualification = styled.p`
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

export const Icons = styled.div`
  width: 280px;
  height: 45px;
  display: flex;
  position: relative;
  justify-content: space-around;
`;
