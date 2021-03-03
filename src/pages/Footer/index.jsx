import React from 'react';
import { FooterStyles, Footer_text, Footer_content_KidsLike, HorizLine } from './Footer.styled';

export default function Footer() {
	return (
		<FooterStyles>
			<div className="footer_content">
				<Footer_text>
					{' '}
					<Footer_content_KidsLike>KidsLike</Footer_content_KidsLike>
					<HorizLine> | </HorizLine> <span> Делаем жизнь родителей и детей изи :) </span>
					<HorizLine>|</HorizLine>
					<span> 2020</span>
				</Footer_text>
			</div>
		</FooterStyles>
	);
}
