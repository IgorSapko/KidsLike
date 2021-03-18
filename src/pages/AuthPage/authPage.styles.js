//Core
import styled from 'styled-components';
//Global
import { device } from '../../index.styles';

const ContainerAuth = styled.div`
	display: flex;
	min-height: calc(100% - 62px);
	background: #ffffff;
	justify-content: center;
	flex-wrap: wrap;
	@media ${device.tablet} {
		min-height: 0;
		overflow-y: scroll;
		background: #fafafa;
	}
	@media ${device.desktop} {
		flex-direction: row-reverse;
		margin-bottom: -90px;
	}
`;

const RegContainer = styled.div`
	max-width: 280px;
	@media ${device.tablet} {
		max-width: 400px;
	}
	@media ${device.desktop} {
		margin-left: 120px;
	}
`;

const Heading = styled.h2`
	font-size: 18px;
	font-weight: 600;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.1px;
	margin-top: 62px;

	@media ${device.tablet} {
		margin-top: 70px;
		font-size: 28px;
		line-height: 34px;
	}

	@media (orientation: landscape) {
		margin-top: 72px;
	}

	@media ${device.desktop} {
		margin-top: 70px;
		font-size: 30px;
		line-height: 37px;
		text-align: left;
	}
`;

const ImagesContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 658px;
	display: block;
	width: 100%;
	min-height: 96px;
	background-image: url('https://storage.googleapis.com/kidslikev2_bucket/060d7816e5c59cb8125e45a28cdc8ba4.png');
	background-position: 40% 24%;
	background-repeat: no-repeat;
	background-size: 120%;

	@media (orientation: landscape) {
		/* display: none; */
		/* overflow-y:scroll; */
	}

	@media ${device.tablet} {
		position: absolute;
		left: 0;
		top: 760px;
		right: 0;
		height: 240px;
		background-image: url('https://storage.googleapis.com/kidslikev2_bucket/060d7816e5c59cb8125e45a28cdc8ba4.png'),
			url('https://storage.googleapis.com/kidslikev2_bucket/c0ff9c1185ec3ebd445ec42158cdebb1.png'),
			url('https://storage.googleapis.com/kidslikev2_bucket/4209b248e4a4c390fd9c15e952d73adf.png');
		background-position: 50% 50px, -3% 85px, 105% 0;
		background-repeat: no-repeat;
		background-size: 31%, 42%, 42%;
		background-color: #fafafa;
		width: 100%;
		margin-top: 0px;
	}

	@media ${device.desktop} {
		display: block;
		position: static;
		margin-top: 10px;
		background-image: url('https://storage.googleapis.com/kidslikev2_bucket/98ae64781367e00885e4a1a1c9bfa4a8.png');
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: cover;
		width: 510px;
		height: 748px;
	}
`;

export { RegContainer, Heading, ImagesContainer, ContainerAuth };
