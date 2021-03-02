import styled from 'styled-components';
import { device, size } from '../../index.styles';
// const FooterStyles = styled.div`
// 	position: fixed;
// 	right: 0;
// 	bottom: 40px;
// 	margin-top: 50px;
// 	width: calc(100% - 240px);
// 	color: #858598;
// 	text-align: end;
// 	margin-right: 50px;
// `;
const FooterStyles = styled.div`
	@media (max-width: ${size.desktop}) {
		height: 50px;
		text-align: center;
		background-color: #fafafa;
		color: #858598;
	}
	@media ${device.desktop} {
		height: 50px;
		text-align: end;
		background-color: #fafafa;
		color: #858598;
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
