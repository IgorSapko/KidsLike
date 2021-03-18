import React from 'react';
import { HeaderLogo, HeaderLogoText, NavLinkElem, LogoImg } from './Logo.styles.js';
import { todayIs } from '../../../utils/Helpers';

const Logo = () => {
	return (
		<NavLinkElem to={todayIs()}>
			<HeaderLogo>
				<HeaderLogoText>KidsLike</HeaderLogoText>
				<LogoImg src="https://storage.googleapis.com/kidslikev2_bucket/b4cf30b06100ecaed6869bbaa6221192.svg" />
			</HeaderLogo>
		</NavLinkElem>
	);
};

export default Logo;
