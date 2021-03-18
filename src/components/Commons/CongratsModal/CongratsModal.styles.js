import styled from 'styled-components';
import { device } from '../../../index.styles';

export const AwardsSubmitButton = styled.button`
	display: flex;
	justify-content: center;
	margin: 40px auto;
	width: 220px;
	height: 48px;
	background: #ffbc33;
	border-radius: 6px;
	border: none;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	align-items: center;
	letter-spacing: 0.02em;
	color: #fafafa;
`;

export const ImgCat = styled.img`
	position: absolute;
	top: -112px;
	width: 200px;
	height: 230px;
`;

export const Congrats = styled.h2`
	margin: auto;
	top: 129px;
	position: absolute;
	width: 240px;
	height: 44px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	@media ${device.tablet} {
		width: 504px;
		height: 36px;
		font-size: 30px;
		line-height: 37px;
	}
`;

export const BtnClose = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
	width: 18px;
	height: 18px;
	cursor: pointer;
	border: none;
	font-size: 22px;
	line-height: 22px;
	font-weight: 300;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 2px;
	transition: all 250ms linear;

	&:focus {
		outline: 0.3px solid #a4b0be;
	}

	&:hover {
		color: #000;
	}

	@media ${device.tablet} {
		right: 20px;
		top: 20px;
	}
`;

export const CongratsModalWrapper = styled.div`
	position: relative;
	background: white;
	display: flex;
	margin: auto;
	margin-top: 10%;
	justify-content: center;
	width: 280px;
	height: 484px;
	inset: 0px;
	border: none;
	border-radius: 6px;
	@media ${device.tablet} {
		width: 602px;
		height: 390px;
	}
`;

export const PrizesWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 202px;
	width: 504px;
	height: 135px;
`;

export const PrizesWrapperBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ChosenPrise = styled.div`
	width: 90px;
	height: 90px;
	border: 5px solid #ffbc33;
	border-radius: 50%;
	background-image: url(${({ img }) => img});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	margin-bottom: 10px;
`;

export const ChosenPriseName = styled.h2`
	width: 90px;
	height: 45px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #000000;
`;

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const WrapperApasity = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.2);
`;

export const AwardsSubmitData = styled.button`
	display: flex;
	justify-content: center;
	margin: 40px auto;
	width: 220px;
	height: 48px;
	background: #ffbc33;
	border-radius: 6px;
	border: none;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	align-items: center;
	letter-spacing: 0.02em;
	color: #fafafa;
`;

export const ModalCongrats = styled.div`
	position: relative;
	background: white;
	display: flex;
	margin: auto;
	justify-content: center;
	width: 280px;
	height: 484px;
	inset: 0px;
	border: none;
	border-radius: 6px;
	@media (min-width: 768px) {
		width: 602px;
		height: 390px;
	}
`;
