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
	MenuImg,
	StyledNavLink,
	HeaderInformUlNotAuthorized,
	MobileMenuNotAuthorized,
	ExitLogoSvgWrapper,
	CloseSvgWrapper,
} from './Navigation.style';
import UserInfo from '../UserInfo/UserInfo';
import ExitLogoSvg from '../../svg/ExitLogoSvg';
import CloseSvg from '../../svg/CloseSvg';
import ModalBackDrop from 'components/Commons/ModalBackDrop/ModalBackDrop';
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
	const menuHeight = document.body.scrollHeight;

	return (
		<HeaderBlock>
			{!user ? (
				<>
					<MobileMenuNotAuthorized>
						<>
							<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
								<MenuImg src="https://storage.googleapis.com/kidslikev2_bucket/df69c16c82b3710b3673ce34bcf49a3c.svg" />
							</MobileMenuLogo>

							{menumob && (
								<ModalBackDrop>
									<MobileMenuText menumob={menumob} user={user} menuHeight={menuHeight}>
										<CloseSvgWrapper
											onClick={() => {
												setMenumob(!menumob);
											}}
											menumob
										>
											<CloseSvg stroke={'red'} />
										</CloseSvgWrapper>
										{notAuthorizedLinks.map(item => (
											<LinkHeaderInform key={item.nameLink}>
												<StyledNavLink exact to={item.path}>
													{item.nameLink}
												</StyledNavLink>
											</LinkHeaderInform>
										))}
									</MobileMenuText>
								</ModalBackDrop>
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
							<ExitLogoSvgWrapper onClick={() => handleLogout()} menumob user>
								<ExitLogoSvg fill={'#858598'} />
							</ExitLogoSvgWrapper>
						</HeaderInformUl>
					</HeaderBlockRight>
					<MobileMenuAuthorized>
						<MobileMenu>
							<MobileMenuLogo onClick={() => setMenumob(!menumob)}>
								<MenuImg src="https://storage.googleapis.com/kidslikev2_bucket/df69c16c82b3710b3673ce34bcf49a3c.svg" />
							</MobileMenuLogo>
							<UserInfoWrapper>
								<UserInfo />
							</UserInfoWrapper>
							<ExitLogoSvgWrapper onClick={() => handleLogout()} menumob={menumob} user>
								<ExitLogoSvg fill={'#858598'} />
							</ExitLogoSvgWrapper>
						</MobileMenu>
						{menumob && (
							<ModalBackDrop>
								<MobileMenuText menuHeight={menuHeight}>
									<UserInfoWrapper menumob>
										<UserInfo menumob />
										<ExitLogoSvgWrapper onClick={() => handleLogout()} menumob={menumob} user>
											<ExitLogoSvg fill={'#FFFFFF'} />
										</ExitLogoSvgWrapper>
									</UserInfoWrapper>
									<CloseSvgWrapper
										onClick={() => {
											setMenumob(!menumob);
										}}
										menumob
									>
										<CloseSvg stroke={'red'} />
									</CloseSvgWrapper>

									{authorizedLinks.map(item => (
										<LinkHeaderInform key={item.nameLink}>
											<StyledNavLink user={user} exact to={item.path}>
												{item.nameLink}
											</StyledNavLink>
										</LinkHeaderInform>
									))}
								</MobileMenuText>
							</ModalBackDrop>
						)}
					</MobileMenuAuthorized>
				</>
			)}
		</HeaderBlock>
	);
};

export default Navigation;
