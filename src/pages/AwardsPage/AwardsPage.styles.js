import styled from 'styled-components';
import {device} from '../../index.styles'

export const AwardsPageWrapper =styled.div`
background: #fafafa;
width:100%;
`;

export const BlockPeopleTaskAwards = styled.ul`
	/* width: 280px;
	
	@media ${device.tablet}  {
		width: 580px;
	}
	@media ${device.desktop} {
		display: flex;	
		flex-wrap: wrap;
	margin: 0 auto;
	padding: 0;
	justify-content: center;
	width: 1200px;
	padding: 0;} */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0px;
	margin-bottom: 20px;
	width: 300px;
	margin:0 auto;
	min-height:fit-content;
	@media ${device.tablet} {
		justify-content: start;
		min-width: 600px;
		padding: 0px;
	};
	@media ${device.desktop} {
				width: 1200px;
		/* margin-right: 0px; */
		
		padding: 0px;
		margin-top: 0px;
	}

`;

export const TopWrapper = styled.div`
/* width: 1200px; */
/* width:auto; */
margin: 0 auto;
/* padding: 0;*/
 display: flex; 
justify-content: space-around;
align-items:center;
@media ${device.tablet} {
	max-width: 600px;
	
};
@media ${device.desktop} {
	max-width: 1200px;
}
`

export const MyPrises = styled.div`
display: flex;
align-items:center;
width: 217px;
height: 26px;
margin-left:-22px;
@media ${device.tablet} {
	margin-left:0;
}
`

export const PriseImg = styled.img`
width: 26px;
height: 26px;
margin-right:14px;
`

export const PriseText = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
letter-spacing: 0.2em;
color: #000000;
`

export const ProgressBlock = styled.div`
width: 349px;
height: 67px;
`