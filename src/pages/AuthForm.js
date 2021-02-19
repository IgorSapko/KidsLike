import React, { useState } from 'react';
import { Form, Input, Button, Label, P, ButtonContainer } from '../styles/auth/authForm';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		console.log('values', email, password);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<P>Вы можете авторизоваться с помощью Google Account:</P>

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
						type="text"
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
			</Form>
		</>
	);
};

export default AuthForm;
