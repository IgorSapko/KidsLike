import React, { useState } from 'react';
import {
	Form,
	Input,
	Button,
	Label,
	P,
	ButtonContainer,
	ButtonGoogle,
	NotificationDiv,
} from './authForm.styles';
import { useDispatch } from 'react-redux';
import { emailValid } from '../../../services/validationFront';
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();

		console.log('email:', email, 'password:', password);

		if (emailValid(email) && password.length >= 4) {
			dispatch({ type: 'auth/userSignUpRequest' });
		} else {
			switch (true) {
				case !emailValid(email):
					console.log('email');
					return notification({
						type: 'warning',
						message: 'Email is not valid!',
					});
				case password.length < 4:
					console.log('pasw');
					return notification({
						type: 'warning',
						message: 'Password is to short!',
					});

				default:
					return;
			}
		}

		setEmail('');
		setPassword('');
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<P>Вы можете авторизоваться с помощью Google Account:</P>
				<ButtonGoogle>Google</ButtonGoogle>
				<P>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</P>
				<Label htmlFor="email">
					Email
					<Input
						type="text"
						placeholder="your@mail.com"
						id="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</Label>
				<Label htmlFor="password">
					Password
					<Input
						type="password"
						placeholder="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</Label>
				<ButtonContainer>
					<Button>Войти</Button>
					<Button>Зарегистрироваться</Button>
				</ButtonContainer>
				<NotificationDiv>
					<NotificationContainer />
				</NotificationDiv>
			</Form>
		</>
	);
};

export default AuthForm;
