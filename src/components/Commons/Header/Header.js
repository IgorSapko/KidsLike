import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo';
import {
	HeaderBlock,
	HeaderBalance,
	HeaderBalanceText,
	HeaderBalanceNumber,
	LeftSideWrapper
} from './Header.styles.js';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	const { user } = useSelector(state => state.auth);
	return (
		<HeaderBlock>
			<LeftSideWrapper>
			<Logo />
			{user &&<HeaderBalance>
				<HeaderBalanceText>
					Баланс <br /> баллов
				</HeaderBalanceText>
				<HeaderBalanceNumber>{user && user.balance}</HeaderBalanceNumber>
			</HeaderBalance>}
			</LeftSideWrapper>
			<Navigation />
		</HeaderBlock>
	);
};

export default Header;
