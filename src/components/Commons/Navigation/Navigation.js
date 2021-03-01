import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

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
	HeaderBlockLeftBlock,
	HeaderBalance,
	HeaderBalanceText,
	HeaderBalanceNumber,
	HeaderBlockRight,
	Headerblockcontact,
	HeaderblockcontactLogo,
} from './Navigation.style';

import UserInfo from '../UserInfo/UserInfo';

import { Menu } from '../Header/LogoSvg';
import { Logo } from '../Logo/Logo';
import { ExitLogo } from './LogoSvg.js';
import authOperations from '../../../redux/auth/authOperations';

const Header = ({ balance }) => {
	const [menumob, setMenumob] = useState(false);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(authOperations.userSighOut());
	};

	return (
		<HeaderBlock>
			<HeaderBlockLeftBlock>
				<NavLink style={{ textDecoration: 'none' }} to="/">
					<HeaderLogo>
						<HeaderLogoText>KidsLike</HeaderLogoText>
						<Logo />
					</HeaderLogo>
				</NavLink>

				<HeaderBalance>
					<HeaderBalanceText>
						Баланс <br /> баллов
					</HeaderBalanceText>

					<HeaderBalanceNumber>{balance}</HeaderBalanceNumber>
				</HeaderBalance>
			</HeaderBlockLeftBlock>

			<HeaderBlockRight>
				<HeaderInformUl>
					<NavLink style={{ textDecoration: 'none' }} to="/">
						<LinkHeaderInform rightPad>Главная</LinkHeaderInform>
					</NavLink>

					<NavLink style={{ textDecoration: 'none' }} to="/planning">
						<LinkHeaderInform rightPad leftPad>
							Планирование
						</LinkHeaderInform>
					</NavLink>
					<NavLink style={{ textDecoration: 'none' }} to="/awards">
						<LinkHeaderInform rightPad leftPad>
							Награды
						</LinkHeaderInform>
					</NavLink>
					<NavLink style={{ textDecoration: 'none' }} to="/contacts">
						<LinkHeaderInform leftPad>Контакты</LinkHeaderInform>
					</NavLink>
				</HeaderInformUl>

				<Headerblockcontact>
					<MobileMenu>
						<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
							<Menu />
						</MobileMenuLogo>
					</MobileMenu>
					{menumob && (
						<MobileMenuText>
							<NavLink style={{ textDecoration: 'none' }} to="/">
								<LinkHeaderInform>Главная</LinkHeaderInform>
							</NavLink>

							<NavLink style={{ textDecoration: 'none' }} to="/planning">
								<LinkHeaderInform>Планирование</LinkHeaderInform>
							</NavLink>
							<NavLink style={{ textDecoration: 'none' }} to="/awards">
								<LinkHeaderInform>Награды</LinkHeaderInform>
							</NavLink>
							<NavLink style={{ textDecoration: 'none' }} to="/contacts">
								<LinkHeaderInform>Контакты</LinkHeaderInform>
							</NavLink>
						</MobileMenuText>
					)}

					<UserInfo />
					<HeaderblockcontactLogo onClick={() => handleLogout()}>
						<ExitLogo />
					</HeaderblockcontactLogo>
				</Headerblockcontact>
			</HeaderBlockRight>
		</HeaderBlock>
	);
};

const mapStateToProps = state => ({
	balance: state.auth.user.user.balance,
});

export default connect(mapStateToProps, null)(Header);
