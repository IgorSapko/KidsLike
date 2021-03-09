import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active'

export const HeaderBlock = styled.div`
position:relative;
	margin: 0 auto;
	max-width: 1280px;
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
	align-items: center;
	@media (max-width: 320px) {
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
		@media (max-width: 320px) {
		padding: 4px;
		font-size: 11px;
	}
`;

export const MobileMenu = styled.div`
	cursor: pointer;
	display: none;
	@media (max-width: 320px) {
		display: block;
	}
`;
export const MobileMenuText = styled.div`
	@media (max-width: 320px) {
		position: absolute;
		right: 2px;
	}
`;
export const MobileMenuLogo = styled.div``;

export const NavLinkElem = styled(NavLink)`
display: flex;
align-items:center;
  margin-left:40px;
  text-decoration:none
`;

// export const NavLinkElem = styled(NavLink).attrs({ activeClassName })`
//   margin-left:40px;
//   &.${activeClassName} {
//     color: red;
//   }
// `;

