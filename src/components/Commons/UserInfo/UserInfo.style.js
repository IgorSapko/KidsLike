import styled, { css } from 'styled-components';
import { device } from '../../../index.styles';

export const UserInfoWrapper=styled.div`
display:flex;
align-items:baseline;
justify-content:flex-start;
height:fit-content;
color:#FFFFFF;
&>h2{
	border-color:#FFFFFF;
}


@media (min-width: 768px) {
	align-items:center;
	color: #858598;
	&>h2{border-color:#858598};
	
	};
	@media ${device.desktop} {
		height: 44px;
		color: #858598;
		&>h2{border-color:#858598};
	};
`;

export const HeaderblockcontactInform = styled.h2`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	padding-right: 15px;
	letter-spacing: 0.04em;
	border-right: 1px solid #858598;
	
		height:fit-content;
	overflow-x:hidden;
	max-width: 180px;
	`;

export const HeaderblockcontactBlockFirstLetter = styled.div`
	height: 25px;
	width: 25px;
	background: #2196f3;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 10px;

	@media (max-width: 320px) {
		display: none;
	}
`;
export const FirstLetter = styled.span`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;

	color: #ffffff;
`;
