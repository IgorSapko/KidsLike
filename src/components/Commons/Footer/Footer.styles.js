// import styled from 'styled-components';
// import { device } from '../../../index.styles';

// const FooterStyles = styled.div`
// 	position: fixed;
// 	right: 0;
// 	bottom: 40px;
// 	margin-top: 50px;
// 	width: calc(100% - 240px);
// 	color: #858598;
// 	text-align: end;
// 	display: none;
// 	// margin-right: 50px;

// 	@media ${device.tablet} {
// 		display: block;
// 		position: fixed;
// 		padding: 0;

// 		left: 20px;
// 		top: 687px;
// 	}

// 	@media ${device.desktop} {
// 		position: relative;
// 		right: 0;
// 		bottom: 40px;
// 		/* top: 700px; */
// 		margin-top: 0px;
// 		width: calc(100% - 240px);
// 		color: #858598;
// 		text-align: end;
// 		display: block;
// 		margin-right: 50px;
// 	}
// `;
// const FooterText = styled.p`
// 	margin: 0px;
// `;
// const footer_content = styled.div``;
// const FooterContentKidsLike = styled.span`
// 	&:after {
// 		content: url('../../img/2finger.svg');
// 		width: 8px;
// 		height: 12px;
// 		margin-left: 6px;
// 	}
// `;
// const HorizLine = styled.span`
// 	display: none;
// 	margin: 0px 8px;
// 	color: #e3e2e7;
// 	@media ${device.tablet} {
// 		display: inline;
// 	}
// `;
// export { FooterStyles, FooterText, FooterContentKidsLike, HorizLine };




// Matey old 
import styled from 'styled-components';
import { device } from '../../../index.styles';
import Fingers from '../../../img/2finger.svg';

const FooterStyles = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
	color: #85859;
	@media ${device.tablet} {
		align-items: center;
		background-color: #fafafa;
	}
	@media ${device.desktop} {
		justify-content: flex-end;
	}
`;
const FooterText = styled.p`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 220px;
	margin: 0px;
	font-size: 11px;
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: 400;
	color: #858598;
	line-height: 18px;
	@media ${device.tablet} {
		width: 100%;
	}
	@media ${device.desktop} {
		margin-right: 50px;
	}
`;
const FooterContentKidsLike = styled.span`
	&:after {
		content: url(${Fingers});
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;
const HorizLine = styled.span`
	display: none;
	margin: 0px 8px;
	color: #e3e2e7;
	@media ${device.tablet} {
		display: inline;
	}
`;
export { FooterStyles, FooterText, FooterContentKidsLike, HorizLine,
 };