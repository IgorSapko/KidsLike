import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	HeaderBlock,
	HeaderLogo,
	HeaderLogoText,

} from './Header.styles.js';
import Navigation from '../Navigation/Navigation'
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
