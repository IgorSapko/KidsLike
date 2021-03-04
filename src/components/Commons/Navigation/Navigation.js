import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
import { ExitLogo } from './ExitlogoSvg.js';
import authOperations from '../../../redux/auth/authOperations';

const Navigation = () => {
	const [menumob, setMenumob] = useState(false);
	const { user } = useSelector(state => state.auth);
	const location = useLocation();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(authOperations.userSighOut());
	};
	
	return (
		<HeaderBlock>
			{!user? (
				<>
					<MobileMenu>
						<>
							<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
								<Menu />
							</MobileMenuLogo>

							{menumob && (
								<MobileMenuText>
									<NavLink style={{ textDecoration: 'none' }} to="/auth">
										<LinkHeaderInform>Авторизация</LinkHeaderInform>
									</NavLink>

									<NavLink style={{ textDecoration: 'none' }} to="/contacts">
										<LinkHeaderInform>Контакты</LinkHeaderInform>
									</NavLink>
								</MobileMenuText>
							)}
						</>
					</MobileMenu>
					<HeaderInformUl>
						<NavLink style={{ textDecoration: 'none' }} to="/auth">
							<LinkHeaderInform rightPad>Авторизация</LinkHeaderInform>
						</NavLink>

						<NavLink style={{ textDecoration: 'none' }} to="/contacts">
							<LinkHeaderInform leftPad>Контакты</LinkHeaderInform>
						</NavLink>
					</HeaderInformUl>
				</>
			) : (
				<>
					<HeaderBlockLeftBlock>
						{/* <NavLink style={{ textDecoration: 'none' }} to="/">
					<HeaderLogo>
						<HeaderLogoText>KidsLike</HeaderLogoText>
						<Logo />
					</HeaderLogo>
				</NavLink> */}

						<HeaderBalance>
							<HeaderBalanceText>
								Баланс <br /> баллов
							</HeaderBalanceText>

							<HeaderBalanceNumber>{user.balance}</HeaderBalanceNumber>
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
				</>
			)}
		</HeaderBlock>
	);
};

// const mapStateToProps = state => ({
// 	balance: state.auth.user.balance,
// });

export default Navigation;
