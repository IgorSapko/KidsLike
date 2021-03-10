import React from 'react';

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

import AuthForm from '../../components/Commons/AuthForm/AuthForm';

const AuthPage = () => {
	return (
		<>
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
		</>
	);
};

export default AuthPage;
