import styled from 'styled-components';
import { device } from 'index.styles';

const Form = styled.form`
	width: 280px;
	height: 500px;
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
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;
	width: 280px;
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

	&: focus {
		outline: 2px solid #ffbc33;
		color: #000000;
	}

	@madia ${device.tablet} {
		max-width: 1280px;
		width: 320px;
	}

	@madia ${device.desktop} {
		width: 320px;
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

	@madia ${device.mobile} {
		max-width: 768px;
		width: 134.99px;
		height: 48px;
	}

	@madia ${device.tablet} {
		max-width: 1280px;
		width: 154px;
		height: 48px;
	}

	@madia ${device.desktop} {
		width: 154px;
		height: 48px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 278px;

	@madia ${device.tablet} {
		max-width: 1280px;
		width: 320px;
	}

	@madia ${device.desktop} {
		width: 320px;
	}
`;

const ButtonGoogle = styled.button`
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
	font-famiy: 'MontserratRegular'
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
`;

const NotificationDiv = styled.div`
	position: absolute;
	top: 450px;
	left: 40px;
`;

export { Form, Input, Button, Label, P, ButtonContainer, ButtonGoogle, NotificationDiv };
