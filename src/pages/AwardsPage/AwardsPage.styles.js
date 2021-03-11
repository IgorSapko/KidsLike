// import styled from 'styled-components';
// import {device} from '../../index.styles'

// export const BlockPeopleTask_Awards = styled.ul`
// 	max-width: 1200px;
// 	margin: 0 auto;
// 	padding: 0;
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	padding: 0;
// 	@media (max-width: 768px) {
// 		max-width: 580px;
// 	}
// 	@media ${device.mobile} {
// 		max-width: 280px;
// 		/* margin-right:0px */
// 	}
// `;

import styled from 'styled-components';
import {device} from '../../index.styles'

export const BlockPeopleTask_Awards = styled.ul`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	@media (max-width: 768px) {
		max-width: 580px;
	}
	@media ${device.mobile} {
		max-width: 280px;
		/* margin-right:0px */
	}
`;

export const TopWrapper = styled.div`
max-width: 280px;
margin: 40px auto;
padding: 0;
display: flex;
justify-content: space-between;
@media ${device.tablet} {
	max-width: 650px;
}
@media ${device.desktop} {
	max-width: 1180px;
}
`

export const MyPrises = styled.div`
display: flex;
// justify-content: space-around;
margin-top: 20px;
width: 217px;
height: 26px;
`

export const Prise_img = styled.img`
width: 26px;
height: 26px;
`

export const Prise_text = styled.p`
margin: 8px 0px 0px 17px;
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