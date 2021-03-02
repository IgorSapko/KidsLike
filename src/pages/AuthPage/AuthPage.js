//Core
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Commons/Header/Header';
//Components

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
		// <div>
		// 	<Header />
		// 	</div>
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
};

AuthPage.propTypes = {};

export default AuthPage;
