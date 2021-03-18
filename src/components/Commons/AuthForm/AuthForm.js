//Core
import React, { useState } from 'react';
//Services
import { emailValid } from '../../../services/validationFront';
//Redux
import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/auth/authOperations';
//Styles
import { Form, Input, Button, Label, P, ButtonContainer, GoogleLink } from './authForm.styles';
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAlertEmail, setValidEmail] = useState(false);
	const [isAlertPassword, setValidPassword] = useState(false);
	const dispatch = useDispatch();

	const handleLogin = event => handleSubmit(event);
	const handleRegister = event => handleSubmit(event);

	const handleSubmit = event => {
		event.preventDefault();
		const { target } = event;

		const credential = {
			email: email,
			password: password,
		};

const errorDataReceiver  = (dataOfError)=>{
	console.log('111')
	notification({
		type: 'warning',
		message: `${dataOfError}`,
	})
};

		if (emailValid(email) && password.length >= 6) {
			target.id === 'signup' && dispatch(authOperations.userSignUp(credential, errorDataReceiver));
			target.id === 'signin' && dispatch(authOperations.userSignIn(credential, errorDataReceiver));
		} else if (!emailValid(email) && password.length < 6) {
			setValidEmail(true);
			setValidPassword(true);
			notification({
				type: 'warning',
				message: 'Неправильный email и слишком короткий пароль (не менее 6 символов)',
			});
		} else if (!emailValid(email)) {
			setValidEmail(true);
			notification({
				type: 'warning',
				message: 'Неправильный email',
			});
		} else if (password.length < 6) {
			setValidPassword(true);
			notification({
				type: 'warning',
				message: 'Слишком короткий пароль (не менее 6 символов)',
			});
		}

		setEmail('');
		setPassword('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<P>Вы можете авторизоваться с помощью Google Account:</P>

			<GoogleLink href="https://kids-like-backend-cloud.herokuapp.com/api/auth/google-auth">
				Google
			</GoogleLink>

			<P>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</P>

			<Label htmlFor="email" isValid={isAlertEmail}>
				Email:
				<Input
					type="text"
					placeholder="your@mail.com"
					autoComplete="off"
					id="email"
					value={email}
					onFocus={() => setValidEmail(false)}
					onChange={e => setEmail(e.target.value)}
				/>
			</Label>

			<Label htmlFor="password" isValid={isAlertPassword}>
				Пароль:
				<Input
					type="password"
					placeholder="password"
					autoComplete="off"
					id="password"
					value={password}
					onFocus={() => setValidPassword(false)}
					onChange={e => setPassword(e.target.value)}
				/>
			</Label>

			<ButtonContainer>
				<Button onClick={handleLogin} id="signin">
					Войти
				</Button>

				<Button onClick={handleRegister} id="signup">
					Зарегистрироваться
				</Button>
			</ButtonContainer>
			<NotificationContainer/>
		</Form>
	);
};

export default AuthForm;
