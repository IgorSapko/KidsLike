import styled from 'styled-components';

const Form = styled.form`
	width: 400px;
	height: 479px;
	box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Input = styled.input`
	width: 320px;
	height: 42px;
	background-color: #f6f7fb;
	box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
	border: 0;
	color: #a6abb9;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;

	&: focus {
		outline: 2px solid #ffbc33;
	}
`;

const Button = styled.button`
	width: 154px;
	height: 48px;
	background-color: #ffbc33;
	border-radius: 6px;
	border: 0;
	color: white;
	cursor: pointer;
`;

const ButtonContainer = styled.div`
	display: flex;
	width: 320px;
	justify-content: space-between;
`;

const Label = styled.label`
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
	color: #858598;
`;

const P = styled.p`
	color: #858598;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;
`;
export { Form, Input, Button, Label, P, ButtonContainer };
