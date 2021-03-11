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
	ExitLogo,
	MenuImg,
	StyledNavLink,
	HeaderInformUlNotAuthorized,
	MobileMenuNotAuthorized
} from './Navigation.style';
import UserInfo from '../UserInfo/UserInfo';
// import { Menu } from '../Header/LogoSvg';
import menu from '../../../img/menu.svg';
import { todayIs } from '../../../utils/Helpers';
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
			{!user ? (
				<>
					<MobileMenuNotAuthorized>
						<>
							<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
								<MenuImg src={menu} />
							</MobileMenuLogo>

							{menumob && (
								<MobileMenuText>
									<LinkHeaderInform>
										<StyledNavLink to="/auth">Авторизация</StyledNavLink>
									</LinkHeaderInform>
									<LinkHeaderInform>
										<StyledNavLink to="/contacts">Контакты</StyledNavLink>
									</LinkHeaderInform>
								</MobileMenuText>
							)}
						</>
					</MobileMenuNotAuthorized>
					<HeaderInformUlNotAuthorized>
						<LinkHeaderInform>
							<StyledNavLink to="/auth">Авторизация</StyledNavLink>
						</LinkHeaderInform>
						<LinkHeaderInform>
							<StyledNavLink to="/contacts">Контакты</StyledNavLink>
						</LinkHeaderInform>
					</HeaderInformUlNotAuthorized>
				</>
			) : (
				<>
					<HeaderBlockLeftBlock>
						<HeaderBalance>
							<HeaderBalanceText>
								Баланс <br /> баллов
							</HeaderBalanceText>

							<HeaderBalanceNumber>{user.balance}</HeaderBalanceNumber>
						</HeaderBalance>
					</HeaderBlockLeftBlock>

					<HeaderBlockRight>
						<HeaderInformUl>
							<LinkHeaderInform>
								<StyledNavLink exact to={todayIs()}>Главная</StyledNavLink>
							</LinkHeaderInform>
							<LinkHeaderInform>
								<StyledNavLink to="/planning">Планирование</StyledNavLink>
							</LinkHeaderInform>
							<LinkHeaderInform>
								<StyledNavLink to="/awards">Награды</StyledNavLink>
							</LinkHeaderInform>
							<LinkHeaderInform>
								<StyledNavLink to="/contacts">Контакты</StyledNavLink>
							</LinkHeaderInform>
							<UserInfo />
							<ExitLogo onClick={() => handleLogout()} />
						</HeaderInformUl>

						<Headerblockcontact>
							<MobileMenu>
								<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
									<MenuImg src={menu} />
								</MobileMenuLogo>
								<UserInfoWrapper>
									<UserInfo />
								</UserInfoWrapper>
								<ExitLogo onClick={() => handleLogout()} />
							</MobileMenu>
							{menumob && (
								<MobileMenuText>
									<LinkHeaderInform>
										<StyledNavLink exact to={todayIs()}>Главная</StyledNavLink>
									</LinkHeaderInform>
									<LinkHeaderInform>
										<StyledNavLink to="/planning">Планирование</StyledNavLink>
									</LinkHeaderInform>
									<LinkHeaderInform>
										<StyledNavLink to="/awards">Награды</StyledNavLink>
									</LinkHeaderInform>
									<LinkHeaderInform>
										<StyledNavLink to="/contacts">Контакты</StyledNavLink>
									</LinkHeaderInform>
								</MobileMenuText>
							)}
						</Headerblockcontact>
					</HeaderBlockRight>
				</>
			)}
		</HeaderBlock>
	);
};

export default Navigation;
