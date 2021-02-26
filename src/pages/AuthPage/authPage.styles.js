import styled from 'styled-components';
import { device } from '../../index.styles';
import auth_1 from '../../img/auth_1.png';
import auth_2 from '../../img/auth_2.png';
import auth_2_jpg from '../../img/auth_2.jpg';
import auth_3 from '../../img/auth_3.png';
import auth_4 from '../../img/auth_4.png';

const RegContainer = styled.div`
	height: 585px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 100px;

	@media ${device.mobile} {
		margin-bottom: 8vh;
		width: 280px;
	}

	@media ${device.tablet} {
		max-width: 1280px;
		position: absolute;
		margin-top: 0px;
		left: 23.8vw;
		top: 13vh;
	}

	@media ${device.desktop} {
		margin-top: 0px;
		position: absolute;
		left: 58.6vw;
		top: 134px;
	}
`;

const ImagesContainer = styled.div`
	@media ${device.tablet} {
		max-width: 1280px;
		position: absolute;
		width: 768px;
		top: 797px;
	}

	@media ${device.desktop} {
		width: 45.3vw;
		height: 87.6vh;
		display: block;
		position: absolute;
		left: 4vw;
		top: 9.7vh;
	}
`;

const P = styled.p`
	font-family: 'Montserrat600', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 37px;
	text-align: center;
	margin: 0 auto 40px auto;
	font-size: 18px;
	line-height: 22px;
	line-height: 22px;
	width: 281px;
	height: 44px;

	@media ${device.mobile} {
		font-family: 'Montserrat600', sans-serif;
		font-style: normal;
		font-weight: 600;
	}

	@media ${device.tablet} {
		max-width: 1280px;
		width: 403px;
		height: 68px;
		font-weight: 600;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		margin-bottom: 32px;
	}

	@media ${device.desktop} {
		width: 403px;
		height: 74px;
		font-size: 30px;
		line-height: 37px;
	}
`;

const ImgAuth1 = styled.div`
	background-image: url(${auth_1});
	background-repeat: no-repeat;
	background-size: contain;
	display: none;
	margin: 0;

	@media ${device.tablet} {
		width: 301px;
		height: 247px;
		position: absolute;
		max-width: 1280px;
		display: block;
		top: 80px;
		left: 0;
		z-index: 1;
	}

	@media ${device.desktop} {
		display: block;
		width: 372px;
		height: 306px;
		position: absolute;
		z-index: 1;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth2 = styled.div`
	background-image: url(${auth_2});
	background-repeat: no-repeat;
	background-size: contain;
	display: block;
	margin: 0;
	width: 100%;
	height: 202px;
	position: absolute;
	top: 85vh;

	@media ${device.tablet} {
		max-width: 1280px;
		background-image: url(${auth_2});
		display: block;
		width: 213px;
		height: 202px;
		top: 44px;
		left: 278px;
		background-size: contain;
		position: absolute;
		z-index: 2;
	}

	@media ${device.desktop} {
		background-image: url(${auth_2});
		display: block;
		background-size: contain;
		position: absolute;
		width: 279px;
		height: 264px;
		z-index: 2;
		left: 221px;
		top: 170px;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth3 = styled.div`
	background-image: url(${auth_3});
	background-repeat: no-repeat;
	display: none;
	background-size: contain;

	@media ${device.desktop} {
		display: block;
		width: 276px;
		height: 219px;
		position: absolute;
		left: 0;
		top: 306px;
		z-index: 3;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth4 = styled.div`
	background-image: url(${auth_4});
	background-repeat: no-repeat;
	background-size: contain;

	display: none;

	@media ${device.tablet} {
		max-width: 1280px;
		display: block;
		width: 297px;
		height: 240px;
		position: absolute;
		left: 476px;
		z-index: 1;
	}

	@media ${device.desktop} {
		display: block;
		width: 359px;
		height: 290px;
		position: absolute;
		left: 221px;
		top: 455px;
		z-index: 4;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth5 = styled.div`
	background-image: url(${auth_4});
	background-repeat: no-repeat;
	background-size: contain;

	display: none;

	@media ${device.mobile} {
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url(${auth_2_jpg});
		display: block;
	}
`;

export { RegContainer, P, ImgAuth1, ImgAuth2, ImgAuth3, ImgAuth4, ImgAuth5, ImagesContainer };
