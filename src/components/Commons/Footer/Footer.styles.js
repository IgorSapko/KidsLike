import styled, { css } from 'styled-components';
import { device } from '../../../index.styles';

const FooterStyles = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
	color: #858598;
	margin-bottom: 50px;
	${props => props.footerLocation === '/' && css``};
	@media ${device.tablet} {
		display: flex;
		align-items: center;
		background-color: #fafafa;
		margin-bottom: 0px;
	}
	@media ${device.desktop} {
		justify-content: flex-end;
		margin-bottom: 0px;
	}
`;
const FooterText = styled.p`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 228px;
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
		content: url('https://storage.googleapis.com/kidslikev2_bucket/8f98e4301779847ff6dc22597d95bd4c.svg');
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
export { FooterStyles, FooterText, FooterContentKidsLike, HorizLine };
