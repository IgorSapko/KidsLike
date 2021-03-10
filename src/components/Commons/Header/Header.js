// import React, { useState } from 'react';

// import { NavLink } from 'react-router-dom';
// //style
// import {
// 	HeaderBlock,
// 	HeaderLogo,
// 	HeaderLogoText,
// 	HeaderInformUl,
// 	LinkHeaderInform,
// 	MobileMenu,
// 	MobileMenuText,
// 	MobileMenuLogo,
// 	HeaderContainer,
// } from './Header.styles.js';

// import { Menu } from './LogoSvg';
// import { Logo } from '../Logo/Logo';

// const Header = () => {
// 	const [menumob, setMenumob] = useState(false);

// 	return (
// 		<HeaderBlock>
// 			<NavLink style={{ textDecoration: 'none' }} to="/">
// 				<HeaderLogo>
// 					<HeaderLogoText>KidsLike</HeaderLogoText>
// 					<Logo />
// 				</HeaderLogo>
// 			</NavLink>
// 			<MobileMenu>
// 				<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
// 					<Menu />
// 				</MobileMenuLogo>

// 				{menumob && (
// 					<MobileMenuText>
// 						<NavLink style={{ textDecoration: 'none' }} to="/auth">
// 							<LinkHeaderInform>Авторизация</LinkHeaderInform>
// 						</NavLink>

// 						<NavLink style={{ textDecoration: 'none' }} to="/contacts">
// 							<LinkHeaderInform>Контакты</LinkHeaderInform>
// 						</NavLink>
// 					</MobileMenuText>
// 				)}
// 			</MobileMenu>

// 			<HeaderInformUl>
// 				<NavLink style={{ textDecoration: 'none' }} to="/auth">
// 					<LinkHeaderInform rightPad>Авторизация</LinkHeaderInform>
// 				</NavLink>

// 				<NavLink style={{ textDecoration: 'none' }} to="/contacts">
// 					<LinkHeaderInform leftPad>Контакты</LinkHeaderInform>
// 				</NavLink>
// 			</HeaderInformUl>
// 		</HeaderBlock>
// 	);
// };

// export default Header;

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
