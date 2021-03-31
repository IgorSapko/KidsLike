import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	HeaderBlock,
	HeaderInformUl,
	LinkHeaderInform,
	MobileMenu,
	MobileMenuText,
	MobileMenuLogo,
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

	const links = [
		{ nameLink: 'Авторизация', path: '/auth', restricted: !user },
		{ nameLink: 'Главная', path: todayIs(), restricted: user },
		{ nameLink: 'Планирование', path: '/planning', restricted: user },
		{ nameLink: 'Награды', path: '/awards', restricted: user },
		{ nameLink: 'Контакты', path: '/contacts', restricted: user || !user },
	];

	const linksFunction = links => {
		return links.map(item => {
			if (item.restricted) {
				return (
					<LinkHeaderInform key={item.nameLink}>
						<StyledNavLink exact to={item.path} user={user}>
							{item.nameLink}
						</StyledNavLink>
					</LinkHeaderInform>
				);
			}
		});
	};
	// const menuHeight = document.body.scrollHeight;
	const html = document.documentElement;
	var menuHeight = Math.max(html.clientHeight, html.scrollHeight, html.offsetHeight);
	
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
											<CloseSvg />
										</CloseSvgWrapper>
										{linksFunction(links)}
									</MobileMenuText>
								</ModalBackDrop>
							)}
						</>
					</MobileMenuNotAuthorized>
					<HeaderInformUlNotAuthorized>{linksFunction(links)}</HeaderInformUlNotAuthorized>
				</>
			) : (
				<>
					<HeaderBlockRight>
						<HeaderInformUl>
							{linksFunction(links)}
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
								<MobileMenuText menuHeight={menuHeight} user={user}>
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
										<CloseSvg  />
									</CloseSvgWrapper>

									{linksFunction(links)}
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
