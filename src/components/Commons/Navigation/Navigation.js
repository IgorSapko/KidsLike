import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
	UserInfoWrapper,
	// ExitLogo,
	MenuImg,
	StyledNavLink,
	HeaderInformUlNotAuthorized,
	MobileMenuNotAuthorized,
	CloseSpan,
	SvgLogo,
	ExitLogoSvgWrapper,
	CloseSvgWrapper
} from './Navigation.style';
import UserInfo from '../UserInfo/UserInfo';
import menu from '../../../img/menu.svg';
import ExitLogoSvg from '../../svg/ExitLogoSvg';
import CloseSvg from '../../svg/CloseSvg';
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

	console.log(document.body.scrollHeight);
	const menuHeight = document.body.scrollHeight;

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
									<MobileMenuText menumob={menumob} user={user} menuHeight={menuHeight}>
										<CloseSvg
											menumob
											stroke={'red'}
											onClick={() => {
												setMenumob(!menumob);
											}}
										/>
										{/* <CloseSpan
											menumob
											onClick={() => {
												setMenumob(!menumob);
											}}
										/> */}
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
								<StyledNavLink user={user} exact to={item.path}>
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
							<ExitLogoSvgWrapper onClick={() => handleLogout()}>
							<ExitLogoSvg fill={'#858598'} menumob user />
							</ExitLogoSvgWrapper>
							{/* <ExitLogo onClick={() => handleLogout()} /> */}
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
							<ExitLogoSvgWrapper onClick={() => handleLogout()}>
							<ExitLogoSvg fill={'#858598'} menumob user />
							</ExitLogoSvgWrapper>
							{/* <ExitLogo onClick={() => handleLogout()} /> */}
						</MobileMenu>
						{menumob && (
							<>
								<MobileMenuText menuHeight={menuHeight}>
									<UserInfoWrapper menumob>
										<UserInfo menumob />
										{/* <ExitLogo menumob user onClick={() => handleLogout()} /> */}
										<ExitLogoSvgWrapper onClick={() => handleLogout()}>
										<ExitLogoSvg  fill={'#FFFFFF'} menumob user/>
									</ExitLogoSvgWrapper>
									</UserInfoWrapper>
									<CloseSvgWrapper onClick={() => {
											setMenumob(!menumob);
										}}>
									<CloseSvg
										menumob
										stroke={'red'}
									/>
									</CloseSvgWrapper>
									{/* <CloseSpan
										onClick={() => {
											setMenumob(!menumob);
										}}
									/> */}

									{authorizedLinks.map(item => (
										<LinkHeaderInform key={item.nameLink}>
											<StyledNavLink user={user} exact to={item.path}>
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
