import React from 'react';
import { HeaderLogo, HeaderLogoText, NavLinkElem, LogoImg } from './Logo.styles.js';
import logo from '../../../img/logo.svg';

const Logo = () => {
	return (
		<NavLinkElem to="/">
			<HeaderLogo>
				<HeaderLogoText>KidsLike</HeaderLogoText>
				<LogoImg src={logo} />
			</HeaderLogo>
		</NavLinkElem>
	);
};

export default Logo;
