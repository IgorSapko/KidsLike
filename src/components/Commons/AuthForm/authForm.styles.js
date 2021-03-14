//Core
import styled from 'styled-components';
//Global
import { device } from '../../../index.styles';
//Assets
import googlePng from '../../../img/google.png';

const Form = styled.form`
	margin-top: 38px;

	@media ${device.tablet} {
		padding: 40px;
		border-radius: 6px;

		box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
	}

	@media ${device.desktop} {
		margin-top: 32px;
	}
`;

const P = styled.p`
	color: #858598;
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;
`;

const GoogleLink = styled.a`
	color: #000;
	font-size: 14px;
	font-weight: 600;
	line-height: 17px;
	text-decoration: none;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 150px;
	height: 42px;
	border-radius: 6px;
	margin-bottom: 30px;
	transition: all 250ms linear;

	background: #f6f7fb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

	&:visited {
		color: #000;
	}

	&::before {
		display: block;

		content: '';
		width: 18px;
		height: 18px;
		margin-right: 10px;

		background-image: url(${googlePng});
		background-repeat: no-repeat;
	}

	&:hover {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
	}
`;

const Label = styled.label`
	color: #858598;
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.04em;

	display: block;

	margin: 0 auto 23px;

	&::before {
		color: #eb5757;

		content: '*';
		padding-right: 2px;
	}

	&::after {
		color: #eb5757;
		font-weight: 400;
		font-size: 10px;
		line-height: 12px;
		letter-spacing: 0.04em;

		display: ${({ isValid }) => (isValid ? 'block' : 'none')};

		position: absolute;
		content: 'это поле обязательное';
	}

	@media ${device.tablet} {
		width: 320px;
	}
`;

const Input = styled.input`
	color: #000;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0.04em;

	display: block;

	width: 100%;
	height: 42px;
	border: none;
	padding: 12px 10px;
	margin: 8px auto 0;

	background: #f6f7fb;
	box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Button = styled.button`
	color: #fafafa;
	font-size: 10px;
	font-weight: 500;
	line-height: 12px;
	letter-spacing: 0.02em;

	display: block;

	width: 135px;
	height: 48px;
	border: none;
	cursor: pointer;
	border-radius: 6px;
	transition: all 250ms linear;

	background: #ffbc33;

	@media ${device.tablet} {
		width: 154px;
	}

	&:focus {
		outline: 0;

		-webkit-box-shadow: 0px 4px 10px 4px rgba(255, 186, 78, 0.5);
		-moz-box-shadow: 0px 4px 10px 4px rgba(255, 186, 78, 0.5);
		box-shadow: 0px 4px 10px 4px rgba(255, 186, 78, 0.5);
	}

	&:hover {
		color: #ffbc33;

		border: 1px solid #ffbc33;

		background-color: transparent;
	}
`;

export { Form, Input, Button, Label, P, ButtonContainer, GoogleLink };
