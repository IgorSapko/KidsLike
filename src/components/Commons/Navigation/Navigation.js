import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
	HeaderBlock,
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
	UserInfoWrapper,
	ExitLogo
} from './Navigation.style';
import UserInfo from '../UserInfo/UserInfo';
import { Menu } from '../Header/LogoSvg';

import authOperations from '../../../redux/auth/authOperations';

const Navigation = () => {
	const [menumob, setMenumob] = useState(false);
	const { user } = useSelector(state => state.auth);
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
					{/* <Menu /> */}
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
							<UserInfo />
							<ExitLogo onClick={() => handleLogout()}/>
							
						</HeaderInformUl>

						<Headerblockcontact>
							<MobileMenu>
								<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
									<Menu />
								</MobileMenuLogo>
								<UserInfoWrapper>
								<UserInfo />
								</UserInfoWrapper>
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


export default Navigation;
