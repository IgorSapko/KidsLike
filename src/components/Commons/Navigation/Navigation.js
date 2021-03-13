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
	MobileMenuAuthorized,
	HeaderblockcontactLogo,
	UserInfoWrapper,
	ExitLogo,
	MenuImg,
	StyledNavLink,
	HeaderInformUlNotAuthorized,
	MobileMenuNotAuthorized,
	CloseSpan
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
	const notAuthorizedLinks = [
		{ nameLink: 'Авторизация', path: '/auth' },
		{ nameLink: 'Контакты', path: '/contacts' },
	];
	const authorizedLinks = [
		{ nameLink: 'Главная', path: todayIs() },
		{ nameLink: 'Планирование', path: '/planning' },
		{ nameLink: 'Награды', path: '/awards' },
		{ nameLink: 'Контакты', path: '/contacts' },
	];

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
								<>
									<MobileMenuText>
										{notAuthorizedLinks.map(item => (
											<LinkHeaderInform key={item.nameLink}>
												<StyledNavLink exact to={item.path}>
													{item.nameLink}
												</StyledNavLink>
											</LinkHeaderInform>
										))}
									</MobileMenuText>
								</>
							)}
						</>
					</MobileMenuNotAuthorized>
					<HeaderInformUlNotAuthorized>
						{notAuthorizedLinks.map(item => (
							<LinkHeaderInform key={item.nameLink}>
								<StyledNavLink exact to={item.path}>
									{item.nameLink}
								</StyledNavLink>
							</LinkHeaderInform>
						))}
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
							{authorizedLinks.map(item => (
								<LinkHeaderInform key={item.nameLink}>
									<StyledNavLink exact to={item.path}>
										{item.nameLink}
									</StyledNavLink>
								</LinkHeaderInform>
							))}
							<UserInfo />
							<ExitLogo onClick={() => handleLogout()} />
						</HeaderInformUl>
					</HeaderBlockRight>
					<MobileMenuAuthorized>
						<MobileMenu>
							<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
								<MenuImg src={menu} />
							</MobileMenuLogo>
							<UserInfoWrapper>
								<UserInfo />
							</UserInfoWrapper>
							<ExitLogo onClick={() => handleLogout()} />
						</MobileMenu>
						{menumob && (<>
							
							<MobileMenuText>
							<CloseSpan onClick={()=>{setMenumob(!menumob)}}/>
							<ExitLogo menumob onClick={() => handleLogout()} />
							<UserInfoWrapper>
								<UserInfo />
							</UserInfoWrapper>
								{authorizedLinks.map(item => (
									<LinkHeaderInform key={item.nameLink}>
										<StyledNavLink exact to={item.path}>
											{item.nameLink}
											
										</StyledNavLink>
									</LinkHeaderInform>
								))}
													
							</MobileMenuText>
							</>
						)}
					</MobileMenuAuthorized>
				</>
			)}
		</HeaderBlock>
	);
};

export default Navigation;
