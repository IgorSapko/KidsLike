import React from 'react';
import AuthForm from '../../components/Commons/AuthForm/AuthForm';
import { ContainerAuth, RegContainer, Heading, ImagesContainer } from './authPage.styles';

const AuthPage = () => (
	<ContainerAuth>
		<RegContainer>
			<Heading>Выполняй задания, получи классные призы!</Heading>

			<AuthForm />
		</RegContainer>

		<ImagesContainer />
	</ContainerAuth>
);

export default AuthPage;
