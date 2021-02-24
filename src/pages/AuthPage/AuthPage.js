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
} from './authPage.styles';

import AuthForm from '../../components/Commons/AuthForm/AuthForm';

const AuthPage = () => {
	return (
		<div>
			<div>
				<ImgAuth1></ImgAuth1>
				<ImgAuth2></ImgAuth2>
				<ImgAuth3></ImgAuth3>
				<ImgAuth4></ImgAuth4>
			</div>
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
