import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
//style
import {
	HeaderBlock,
	HeaderLogo,
	HeaderLogoText,
	HeaderInformUl,
	LinkHeaderInform,
	MobileMenu,
	MobileMenuText,
	MobileMenuLogo,
} from './Header.styles.js';
import Navigation from '../Navigation/Navigation'
import { Menu } from './LogoSvg';
import { Logo } from '../Logo/Logo';

const Header = () => {
	

	return (
		<HeaderBlock>
			<NavLink style={{ textDecoration: 'none' }} to="/">
				<HeaderLogo>
					<HeaderLogoText>KidsLike</HeaderLogoText>
					<Logo />
				</HeaderLogo>
			</NavLink>
		<Navigation/>
		</HeaderBlock>
	);
};

export default Header;
