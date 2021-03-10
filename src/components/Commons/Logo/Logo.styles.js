import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img`
	width: 16px;
	height: 16px;
`;

export const NavLinkElem = styled(NavLink)`
	display: flex;
	align-items: center;
	margin-left: 40px;
	text-decoration: none;
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

export const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
