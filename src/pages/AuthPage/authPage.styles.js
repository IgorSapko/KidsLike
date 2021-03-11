import styled from 'styled-components';
import { device } from '../../index.styles';

const ContainerAuth = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	margin-top: 58px;
	margin-bottom:20px;

	@media ${device.tablet}{
max-width:1280px;
margin-top:0;
flex-direction: row;
justify-content: center;
margin-top:72px;
margin-bottom:10px;
	}

	@media ${device.desktop}{
		width: 1280px;
		height:890px;
		margin-top:0;
		flex-direction: row;
		flex-wrap: none;

			}
`;

const RegContainer = styled.div`
	height: 585px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;

	@media ${device.mobile} {
		position: absolute;
		margin-top: 72px;
		width: 280px;
	}

	@media ${device.tablet} {
		}

	@media ${device.desktop} {
		margin-top: 0px;
		position: absolute;
		left: 58.6vw;
		top: 134px;
	}
`;

const ImagesContainer = styled.div`
	display: block;
	/* overflow:hidden; */
position:relative;
	@media ${device.tablet} {
		max-width: 1280px;
		display: block;
		margin: 0 auto;
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
	background-image: url('https://storage.googleapis.com/kidslikev2_bucket/fe5e0217daef7b48e5b8ea8f38b64811.jpg');
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
		left: 15px;
		z-index: 1;
	}

	@media ${device.desktop} {
		display: block;
		width: 372px;
		height: 306px;
		position: absolute;
		top: 0;
		z-index: 1;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth2 = styled.div`
	background-image: url('https://storage.googleapis.com/kidslikev2_bucket/060d7816e5c59cb8125e45a28cdc8ba4.png');
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: 50%; */
	display: block;
	width: 320px;
	height: 264px;
	margin-left: 10px;
position:absolute;
/* border-image-outset:150px;
top:0;
left:0; */
transform:translate(-50%,0%);
/* overflow:hidden; */
	/* @media ${device.mobile} {
		display: block;
		background-size: cover;
	} */

	@media ${device.tablet} {
		max-width: 1280px;
		background-image: url('https://storage.googleapis.com/kidslikev2_bucket/060d7816e5c59cb8125e45a28cdc8ba4.png');
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
		background-image: url('https://storage.googleapis.com/kidslikev2_bucket/060d7816e5c59cb8125e45a28cdc8ba4.png');
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
	background-image: url('https://storage.googleapis.com/kidslikev2_bucket/c8332234108d17a7c581bbad4fad7365.png');
	background-repeat: no-repeat;
	display: none;
	background-size: contain;

	@media ${device.desktop} {
		display: block;
		width: 276px;
		height: 219px;
		position: absolute;
		left: 0;
		top: 326px;
		z-index: 3;
		filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
		border-radius: 6px;
	}
`;

const ImgAuth4 = styled.div`
	background-image: url('https://storage.googleapis.com/kidslikev2_bucket/4209b248e4a4c390fd9c15e952d73adf.png');
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

export { RegContainer, P, ImgAuth1, ImgAuth2, ImgAuth3, ImgAuth4, ImagesContainer, ContainerAuth };
