import React from 'react';
import { useLocation } from 'react-router-dom';
import { FooterStyles, FooterText, FooterContentKidsLike, HorizLine } from './Footer.styles';

export default function Footer({footerLocation}) {
	const location = useLocation();

	return (
		<FooterStyles footerLocation={location.pathname}>
			<div className="footer_content">
				<FooterText>
					{' '}
					<FooterContentKidsLike>KidsLike</FooterContentKidsLike>
					<HorizLine> | </HorizLine> <span> Делаем жизнь родителей и детей изи :) </span>
					<HorizLine>|</HorizLine>
					<span> 2020</span>
				</FooterText>
			</div>
		</FooterStyles>
	);
}
