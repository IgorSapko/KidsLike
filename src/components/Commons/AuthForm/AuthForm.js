import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailValid } from '../../../services/validationFront';
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';
import authOperations from '../../../redux/auth/authOperations';
import googleLabel from '../../../img/google.svg';
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

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleLogin = event => {
		handleSubmit(event);
	};

	const handleRegistr = event => {
		handleSubmit(event);
	};

	const handleSubmit = event => {
		event.preventDefault();

		const credential = {
			email: email,
			password: password,
		};

		if (emailValid(email) && password.length >= 4) {
			if (event.target.id === 'signup') {
				dispatch(authOperations.userSignUp(credential));
			} else if (event.target.id === 'login') {
				dispatch(authOperations.userSignIn(credential));
			}
		} else {
			switch (true) {
				case !emailValid(email):
					return notification({
						type: 'warning',
						message: 'Email is not valid!',
					});
				case password.length < 4:
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
				<NotificationDiv>
					<NotificationContainer />
				</NotificationDiv>
				<ButtonContainer>
					<Button onClick={handleLogin} id="login">
						Войти
					</Button>
					<Button onClick={handleRegistr} id="signup">
						Зарегистрироваться
					</Button>
				</ButtonContainer>
			</Form>
		</>
	);
};

export default AuthForm;
