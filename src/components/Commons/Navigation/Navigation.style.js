import { BrowserRouter, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import exitLogo from '../../../img/exitLogo.svg';
import closeHeaderMenu from '../../../img/closeHeaderMenu.svg';
import { device } from '../../../index.styles';

const activeClassName = 'nav-item-active';

export const CloseSpan = styled.span`
	position: absolute;
	top: 20px;
	right: 20px;
	display: block;
	background-image: url(${closeHeaderMenu});
	background-repeat:no
	width: 14px;
	height: 14px;
`;

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
	&.${activeClassName} {
		text-decoration: none;
		color: rgba(0, 0, 0, 1);
	}

	text-decoration: none;
	list-style: none;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	color: rgba(133, 133, 152, 1);
	cursor: pointer;
	/* border: 1px solid rgba(133, 133, 152, 1); */

	padding-right: 15px;
	margin-right: 15px;
	border-right: 1px solid #858598;
`;

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

export const LinkHeaderInform = styled.li`
	list-style: none;
	display:flex;
	justify-content:center;
	align-items:center;
	height: 44px;

border-bottom: 1px solid #ffffff;

	
`;

export const MobileMenu = styled.div`
	display: none;
	@media (max-width: 1280px) {
		/* position: relative; */
		width: 100%;
		margin-right: 40px;
		display: flex;
		justify-content: flex-end;
	}
`;

export const MobileMenuNotAuthorized = styled.div`
	display: none;
	@media (max-width: 768px) {
		/* position: relative; */
		width: 100%;
		margin-right: 40px;
		display: flex;
		justify-content: flex-end;
	}
`;

export const HeaderInformUl = styled.ul`
	display: none;

	@media (min-width: 1280px) {
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: flex-end;
		padding-right: 40px;
	}
`;

export const HeaderInformUlNotAuthorized = styled.ul`
	display: none;

	@media (min-width: 768px) {
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: flex-end;
		padding-right: 40px;
	}
`;

export const UserInfoWrapper = styled.div`
	display: flex;
	align-items:center;
	height:80px;
	border-bottom: 1px solid #ffffff;
	/* @media (max-width: 768px) {
		display: none;
	} */
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

export const MobileMenuAuthorized = styled.div`
	/* position: relative; */
	display: flex;
	padding: 0;
	margin: 0;
	align-items: center;
	justify-content: space-between;
	@media ${device.desktop} {
		display: none;
	}
`;

export const MobileMenuText = styled.ul`
	background-color: rgba(255, 188, 51, 1);
	box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.25);
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;

	width: 274px;
	height: 100vh;
	& > li > a {
		border: none;
	};

&:last-child {
	border-bottom: 1px solid #ffffff;}
`;
export const MobileMenuLogo = styled.div`
	margin-right: 20px;
	/* position: relative; */
`;

export const HeaderblockcontactLogo = styled.div`
	padding-left: 15px;
	cursor: pointer;
	@media (max-width: 320px) {
		display: none;
	}
`;

export const ExitLogo = styled.span`
	position: absolute;
	top: 20px;
	right: 40px;
	display: block;
	background: url(${exitLogo});
	width: 18px;
	height: 18px;
	fill: rgba(255, 255, 255, 1);
	${props =>
		props.menumob &&
		css`
			display: none;
		`};
	@media (max-width: 768px) {
		display: none;
		${props =>
			props.menumob &&
			css`
				display: block;
			`};
	}

	/* &:after {
		content: url(${exitLogo});
		width: 8px;
		height: 12px;
		margin-left: 18px;
		${props =>
		props.menumob &&
		css`
			display: none;
		`};
		@media (max-width: 768px) {
			display: none;
			${props =>
		props.menumob &&
		css`
			display: block;
		`};
		}
	} */
`;
export const MenuImg = styled.img`
	width: 22px;
	height: 14px;
`;
