import React from 'react';
import { FooterStyles, FooterText, FooterContentKidsLike, HorizLine } from './Footer.styles';

export default function Footer() {
	return (
		<FooterStyles>
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
