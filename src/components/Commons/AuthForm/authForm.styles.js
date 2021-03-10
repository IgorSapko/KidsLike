import styled from 'styled-components';
import { device } from '../../../index.styles';
import googlePng from '../../../img/google.png';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 23px;
	@media ${device.tablet} {
		margin-top: 20px;
		max-width: 1280px;
		width: 320px;
	}
	@media ${device.desktop} {
		padding-top: 20px;
		width: 320px;
	}
`;

const ButtonGoogle = styled.div`
	cursor: pointer;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	width: 150px;
	height: 42px;
	background-color: #f6f7fb;
	border: 0;
	border-radius: 6px;
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	&:focus {
		outline: 0;
		box-shadow: 5px 1px 17px 3px #ffba4e;
	}
`;

const Label = styled.label`
	font-family: 'MontserratRegular';
	font-style: normal;
	font-size: 12px;
	line-height: 15px;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	color: #858598;
	margin-bottom: 23px;
	&::before {
		content: '*';
		padding-right: 7px;
		color: #eb5757;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.04em;
	}
`;

const P = styled.p`
	color: #858598;
	font-family: 'MontserratRegular';
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	height:30px;
	margin-bottom:20px;
	
`;

const NotificationDiv = styled.div`
	position: absolute;
	top: 485px;
	left: 40px;
	color: red;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.04em;
`;

const NotificationDivEmail = styled.div`
	position: absolute;
	top: 385px;
	left: 40px;
	color: red;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.04em;
`;

const GoogleLink = styled.a`
	text-decoration: none;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	display: flex;
	align-items: center;
	justify-content: center;
	&::before {
		content: '';
		width: 18px;
		height: 18px;
		display: inline-block;
		margin-right: 5px;
		background: url('${googlePng}');
	}
`;

const AnimatedNotiicationEmail = styled.p`
	position: absolute;
	top: 375px;
	width: auto;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.04em;
	color: #eb5757;
`;

const AnimatedNotiicationPassword = styled.p`
	position: absolute;
	top: 465px;
	width: auto;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.04em;
	color: #eb5757;
`;


const Form = styled.form`
	display: block;
	width: 280px;
	height: 479px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media ${device.tablet} {
		max-width: 1280px;
		width: 400px;
		height: 500px;
		box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		padding: 40px;
		margin-bottom: 78px;
	}
	@media ${device.desktop} {
		width: 400px;
		height: 500px;
		box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		padding: 40px;
	}
`;

const Input = styled.input`
	display: block;
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;
	width: 100%;
	height: 42px;
	background-color: #f6f7fb;
	box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
	border: 0;
	color: #a6abb9;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;
	margin-top: 10px;
	padding-top: 10px;
	padding-left: 10px;
	padding-bottom: 12px;
	@media ${device.tablet} {
		width: 320px;
	}
	@media ${device.desktop} {
		width: 320px;
	}
	&:focus {
		outline: 2px solid #ffbc33;
		color: #000000;
	}
`;

const Button = styled.button`
	font-family: 'MontserratRegular';
	background-color: #ffbc33;
	border-radius: 6px;
	border: 0;
	color: white;
	cursor: pointer;
	width: 134.99px;
	height: 48px;
	@media ${device.mobile} {
		max-width: 768px;
		width: 134.99px;
		height: 48px;
	}
	@media ${device.tablet} {
		max-width: 1280px;
		width: 154px;
		height: 48px;
	}
	@media ${device.desktop} {
		width: 154px;
		height: 48px;
	
	&:focus {
		outline: 0;
		box-shadow: 5px 1px 17px 3px #ffba4e;
	}
	&:hover {
		border: 2px solid #ffbc33;
		background-color: white;
		color: #ffbc33;
	};
`;


export {
	Form,
	Input,
	Button,
	Label,
	P,
	ButtonContainer,
	ButtonGoogle,
	NotificationDiv,
	GoogleLink,
	NotificationDivEmail,
	AnimatedNotiicationEmail,
	AnimatedNotiicationPassword,
};


