//Core
import styled from 'styled-components';
//Global
import { device } from '../../index.styles';
//Assets
import auth1 from '../../img/auth_1.png';
import auth2 from '../../img/auth_2.png';
import auth4 from '../../img/auth_4.png';
import aut_bg_desktop from '../../img/aut_bg_desktop.png';

const ContainerAuth = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100% - 62px);

	@media (orientation: landscape) {
		margin-bottom: 22px;
		min-height: calc(100% - 160px);
	}

	@media ${device.tablet} {
		min-height: 0;
	}

	@media ${device.desktop} {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 0;
		min-height: calc(100% - 62px - 80px);
	}
`;

const RegContainer = styled.div`
	max-width: 280px;
	margin: 0 auto 60px;

	@media ${device.tablet} {
		max-width: 400px;
		margin: 0 auto 0;
	}

	@media ${device.desktop} {
		margin-right: 10%;
	}
`;

const Heading = styled.h2`
	font-size: 18px;
	font-weight: 600;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.1px;
	margin-top: 40px;

	@media ${device.tablet} {
		margin-top: 70px;
		font-size: 28px;
		line-height: 34px;
	}

	@media (orientation: landscape) {
		margin-top: 22px;
	}

	@media ${device.desktop} {
		margin-top: 70px;
		font-size: 30px;
		line-height: 37px;
		text-align: left;
	}
`;

const ImagesContainer = styled.div`
	display: block;
	max-width: 100%;
	min-height: 100px;
	background-image: url(${auth2});
	background-position: 40% 24%;
	background-repeat: no-repeat;
	background-size: 120%;

	@media (orientation: landscape) {
		display: none;
	}

	@media ${device.tablet} {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		min-height: 240px;
		background-image: url(${auth2}), url(${auth1}), url(${auth4});
		background-position: 50% 50px, -3% 85px, 105% 0;
		background-repeat: no-repeat;
		background-size: 31%, 42%, 42%;
	}

	@media ${device.desktop} {
		display: block;
		flex: 0 0 50%;
		position: absolute;
		top: 10%;
		left: 2%;
		bottom: 2%;
		background-image: url(${aut_bg_desktop});
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: contain;
		max-width: 50%;
	}
`;

export { RegContainer, Heading, ImagesContainer, ContainerAuth };

/*
import auth3 from '../../img/auth_3.png'; 

background-image: url(${auth4}), url(${auth2}), url(${auth1}), url(${auth3});
		background-position: 100% 100%, 70% 35%, 26% 3%, 20% 60%;
		background-repeat: no-repeat;
		background-size: 359px, 279px, 372px, 276px; 
*/
