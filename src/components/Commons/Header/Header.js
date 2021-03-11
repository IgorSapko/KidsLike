
import React from 'react';
import Logo from '../Logo/Logo';
import { HeaderBlock } from './Header.styles.js';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<HeaderBlock>
			<Logo />
			<Navigation />
		</HeaderBlock>
	);
};

export default Header;
