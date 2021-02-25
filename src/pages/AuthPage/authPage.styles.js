import styled from 'styled-components';
import { device } from '../../index.styles';
import auth_1 from '../../img/auth_1.png';
import auth_2 from '../../img/auth_2.png';
import auth_2_jpg from '../../img/auth_2.jpg';
import auth_3 from '../../img/auth_3.png';
import auth_4 from '../../img/auth_4.png';

const RegContainer = styled.div`
	width: 280px;
	height: 585px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	margin-bottom: 8vh;

	@media ${device.tablet} {
		max-width: 1280px;
		left: 23.8vw;
		top: 13vh;
	}

	@media ${device.desktop} {
		left: 58.6vw;
		top: 134px;
	}
`;

const P = styled.p`
	font-family: 'Montserrat600', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 37px;
	text-align: center;
	margin-top: 8vh;
	margin-bottom: 5vh;

	@media ${device.mobile} {
		max-width: 768px;
		font-family: 'Montserrat600', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		max-width: 768px;
		width: 281px;
		height: 44px;
		margin-bottom: 38px;
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
	position: absolute;
	background-image: url(${auth_1});
	background-repeat: no-repeat;
	background-size: contain;
	display: none;
	margin: 0;

	@media ${device.tablet} {
		position: fixed;
		max-width: 1280px;
		display: block;
		width: 39vw;
		height: 24vh;
		left: 0;
		top: 86vh;
		z-index: png;
	}

	@media ${device.desktop} {
		position: fixed;
		display: block;
		min-width: 29vw;
		min-height: 36vh;
		left: 4vw;
		top: 10vh;
		z-index: 1;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth2 = styled.div`
	position: absolute;
	background-image: url(${auth_2});
	background-repeat: no-repeat;
	background-size: contain;
	display: none;
	margin: 0;

	@media ${device.tablet} {
		background-image: url(${auth_2});
		display: block;
		background-size: contain;
		position: fixed;
		max-width: 1280px;
		width: 28vw;
		height: 19.7vh;
		left: 36vw;
		top: 82.5vh;
		z-index: 2;
	}

	@media ${device.desktop} {
		background-image: url(${auth_2});
		display: block;
		background-size: contain;
		position: fixed;
		width: 22vw;
		min-height: 31vh;
		left: 21vw;
		top: 29vh;
		z-index: 2;

		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth3 = styled.div`
	background-image: url(${auth_3});
	background-repeat: no-repeat;
	position: absolute;
	display: none;
	background-size: contain;
	margin: 0;

	@media ${device.desktop} {
		position: fixed;
		display: block;
		min-width: 21.5vw;
		min-height: 25.7vh;
		left: 4vw;
		top: 48vh;
		z-index: 3;

		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth4 = styled.div`
	background-image: url(${auth_4});
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	display: none;
	margin: 0;

	@media ${device.tablet} {
		position: fixed;
		max-width: 1280px;
		height: 23.4vh;
		display: block;
		width: 42vw;
		left: 58vw;
		top: 76.8vh;
		z-index: 1;
	}

	@media ${device.desktop} {
		display: block;
		width: 28vw;
		height: 34vh;
		left: 20vw;
		top: 60vh;
		z-index: 4;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth5 = styled.div`
	background-image: url(${auth_4});
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	display: none;
	margin: 0;

	@media ${device.mobile} {
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url(${auth_2_jpg});
		display: block;
		width: 100px;
		heigth: 27px;
	}
`;

export { RegContainer, P, ImgAuth1, ImgAuth2, ImgAuth3, ImgAuth4, ImgAuth5 };
