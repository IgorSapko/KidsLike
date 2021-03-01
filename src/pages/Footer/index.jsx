import React from 'react';
import { FooterStyles, Footer_text, Footer_content_KidsLike } from './Footer.styled';

export default function Footer() {
	return (
		<FooterStyles>
			<div className="footer_content">
				<Footer_text>
					{' '}
					<Footer_content_KidsLike>KidsLike</Footer_content_KidsLike> |{' '}
					<span>Делаем жизнь родителей и детей изи :)</span> | <span>2020</span>
				</Footer_text>
			</div>
		</FooterStyles>
	);
}
