//Core
import React from 'react';
import PropTypes from 'prop-types';

//Components

import {
	RegContainer,
	P,
	ImgAuth1,
	ImgAuth2,
	ImgAuth3,
	ImgAuth4,
	ImgAuth5,
	ImagesContainer
} from './authPage.styles';

import AuthForm from '../../components/Commons/AuthForm/AuthForm';

const AuthPage = () => {
	return (
		<div>
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
			<ImgAuth5></ImgAuth5>
		</div>
	);
};

AuthPage.propTypes = {};

export default AuthPage;
