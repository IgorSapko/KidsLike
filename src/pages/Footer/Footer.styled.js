import styled from 'styled-components';
import { device } from '../../index.styles';

const FooterStyles = styled.div`
	position: fixed;
	right: 0;
	bottom: 40px;
	margin-top: 50px;
	width: calc(100% - 240px);
	color: #858598;
	text-align: end;
	display: none;
	// margin-right: 50px;

	@media ${device.tablet} {
		display: block;
		position: fixed;
		padding: 0;

		left: 20px;
		top: 687px;
	}

	@media ${device.desktop} {
		position: fixed;
		right: 0;
		bottom: 40px;
		top: 797px;
		margin-top: 50px;
		width: calc(100% - 240px);
		color: #858598;
		text-align: end;
		display: block;
		margin-right: 50px;
	}
`;
const Footer_text = styled.p`
	margin: 0px;
`;
const footer_content = styled.div``;
const Footer_content_KidsLike = styled.span`
	&:after {
		content: url('../../img/2finger.svg');
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;
export { FooterStyles, Footer_text, Footer_content_KidsLike };
