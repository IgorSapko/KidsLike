//Core
import React from 'react';
//Components
import AuthForm from '../../components/Commons/AuthForm/AuthForm';
//Styles
import {
	ContainerAuth,
	RegContainer,
	P,
	ImgAuth1,
	ImgAuth2,
	ImgAuth3,
	ImgAuth4,
	ImagesContainer,
} from './authPage.styles';

const AuthPage = () => (
	<ContainerAuth>
		<ImagesContainer>
			<ImgAuth1></ImgAuth1>
			<ImgAuth2></ImgAuth2>
			<ImgAuth3></ImgAuth3>
			<ImgAuth4></ImgAuth4>
		</ImagesContainer>

		<RegContainer>
			<P>Выполняй задания, получи классные призы!</P>
			<AuthForm />
		</RegContainer>
	</ContainerAuth>
);

export default AuthPage;
