import styled, { css } from 'styled-components';
import exitLogo from '../../../img/exitLogo.svg'

export const HeaderBlock = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	width: 100%;
	padding: 21px 0;
	display: flex;
	justify-content: space-between;
`;

export const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const HeaderLogoText = styled.h2`
	padding-right: 9px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 0.08em;
	color: #000000;
`;

export const HeaderInformUl = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	padding-right: 40px;

	@media (max-width: 1280px) {
		display: none;
	}
`;

export const LinkHeaderInform = styled.li`
	list-style: none;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	color: #858598;
	cursor: pointer;

	${props =>
		props.rightPad &&
		css`
			padding-right: 15px;
			border-right: 1px solid #858598;
		`}
	${props =>
		props.leftPad &&
		css`
			padding-left: 15px;
		`}
		@media (max-width: 768px) {
		padding: 8px;
		font-size: 11px;
	}
`;

export const MobileMenu = styled.div`
	display: flex;
	cursor: pointer;
	margin-right: 10px;
	@media (max-width: 768px) {
		margin-right: 40px;
		display: block;
	}
`;

export const UserInfoWrapper = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const HeaderBlockLeftBlock = styled.div`
	display: flex;
`;

export const HeaderBalance = styled.div`
	display: flex;
	align-items: center;
	margin-left: 43px;
`;
export const HeaderBalanceText = styled.h3`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;

	color: #a6abb9;
	margin-right: 10px;
`;

export const HeaderBalanceNumber = styled.span`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;

	color: #000000;
`;
export const HeaderBlockRight = styled.div`
	display: flex;
	padding: 0;
	align-items: center;
`;

export const Headerblockcontact = styled.div`
	position: relative;
	display: flex;
	padding: 0;
	margin: 0;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 1280px) {
		display: none;
	}
`;

export const MobileMenuText = styled.ul`
	@media (max-width: 768px) {
		position: absolute;
		top: 0px;
		left: 0px;
		transform:translate(50%,50%);
		border-color: red;
	}
	@media (max-width: 320px) {
		right: 8px;
	}
`;
export const MobileMenuLogo = styled.div`
	margin-right: 20px;
`;

export const HeaderblockcontactLogo = styled.div`
	padding-left: 15px;
	cursor: pointer;
	@media (max-width: 320px) {
		display: none;
	}
`;

export const ExitLogo = styled.span`
	&:after {
		content: url(${exitLogo});
		width: 8px;
		height: 12px;
		margin-left: 6px;
		margin-left:18px;
	}
`;