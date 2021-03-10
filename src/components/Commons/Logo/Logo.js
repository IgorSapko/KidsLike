import React from 'react';
import { HeaderLogo, HeaderLogoText, NavLinkElem, LogoImg } from './Logo.styles.js';
import logo from '../../../img/logo.svg';
import { todayIs } from 'utils/Helpers.js';

const Logo = () => {
	return (
		<NavLinkElem to={todayIs()}>
			<HeaderLogo>
				<HeaderLogoText>KidsLike</HeaderLogoText>
				<LogoImg src={logo} />
			</HeaderLogo>
		</NavLinkElem>
	);
};

export default Logo;
