import {  NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import exitLogo from '../../../img/exitLogo.svg';
import closeHeaderMenu from '../../../img/closeCross.svg';
import { device } from '../../../index.styles';

const activeClassName = 'nav-item-active';

export const CloseSpan = styled.span`
	position: absolute;
	top: 20px;
	right: 20px;
	display: block;
	background-image: url(${closeHeaderMenu});
	background-repeat: no-repeat;
	width: 14px;
	height: 14px;
`;

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
	&.${activeClassName} {
		text-decoration: none;
		color: #000000;
	}
	text-decoration: none;
	list-style: none;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	color: #ffffff;
	cursor: pointer;
	margin-left: 30px;
	padding-right: 15px;
	margin-right: 15px;
	border-right: 1px solid #858598;
	${props =>
		props.user &&
		css`
			@media ${device.desktop} {
				color: #858598;
			};
			@media ${device.tablet} {
				color: #858598;
				margin-left: 0px;
			}
		`};
	@media ${device.desktop} {
		color: #858598;
		margin-left: 0px;
	} ;
`;

export const HeaderBlock = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	width: 100%;
	padding: 21px 0;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media ${device.desktop} {
		padding: 0;
	} ;
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
	border-bottom: 1px solid rgb(255, 255, 255, 0.5);
`;

export const LinkHeaderInform = styled.li`
	list-style: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 44px;

	border-bottom: 1px solid rgb(255, 255, 255, 0.5);
`;

export const MobileMenu = styled.div`
	display: none;
	@media (max-width: 1280px) {
		width: 100%;
		margin-right: 40px;
		display: flex;
		align-items: center;
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
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.desktop} {
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: flex-end;
		padding-right: 40px;
		align-items: center;
		& :nth-child(4) > a {
			padding-right: 0px;
			margin-right: 40px;
			border-right: none;
		}
	} ;
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
		& :nth-child(2) > a {
			border-right: none;
		}
	}
`;

export const UserInfoWrapper = styled.div`
	display: none;
	flex-wrap: wrap;
	justify-content: center;
	width: fit-content;
	margin-left: 30px;
	margin-top: 16px;
	height: 64px;
	max-width: 180px;
	${props =>
		props.menumob &&
		css`
			display: flex;
		`};
	@media ${device.tablet} {
		display: none;
		${props =>
			!props.menumob &&
			css`
				display: flex;
			`};
		align-items: center;
		margin-left: 0px;
		margin-top: 0px;
		height: fit-content;
	} ;
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
	@media ${device.tablet} {
		height: fit-content;
	}
	@media ${device.desktop} {
		display: none;
	}
`;

export const MobileMenuText = styled.ul`
	display: flex;
	flex-direction: column;
	background-color: rgba(255, 188, 51, 1);
	box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.25);
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1111;
	width: 274px;
	height:100vh ;
	overflow-y:hidden;
	${props =>
		(props.menumob &&!props.user)&&
		css`
			&:before {
				content: '';
				display: block;
				width: auto;
				height: 80px;
				border-bottom: 2px solid rgb(255, 255, 255, 0.5);
			}
		`};

	& > li > a {
		border: none;
	}
	& :nth-child(3) {
		border-top: 1px solid rgb(255, 255, 255, 0.5);
	}
	@media ${device.tablet} {
		&:before {
			content: '';
			display: block;
			width: auto;
			height: 80px;
		}
	} ;
`;
export const MobileMenuLogo = styled.div`
	margin-right: 20px;
	@media ${device.tablet} {
		height: 14px;
		width: 22px;
	}
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
	display: inline-block;
	background: url(${exitLogo});
	width: 18px;
	height: 18px;
	fill: rgba(255, 255, 255, 1);
	${props =>
		props.menumob &&
		css`
			display: none;
		`};
	@media ${device.tablet} {
		margin-left: 16px;
	}

	@media (max-width: 768px) {
		display: none;
		${props =>
			props.menumob &&
			css`
				display: block;
				margin-top: 4px;
				margin-left: 15px;
			`};
	}
`;
export const MenuImg = styled.img`
	width: 22px;
	height: 14px;
`;
