import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	HeaderBlock,
	HeaderLogo,
	HeaderLogoText,
	NavLinkElem
} from './Header.styles.js';
import Navigation from '../Navigation/Navigation'
import { Logo } from '../Logo/Logo';

const Header = () => {
	

	return (
		<HeaderBlock>
			<NavLinkElem  to="/">
				<HeaderLogo>
					<HeaderLogoText>KidsLike</HeaderLogoText>
					<Logo />
				</HeaderLogo>
			</NavLinkElem>
		<Navigation/>
		</HeaderBlock>
	);
};

export default Header;
