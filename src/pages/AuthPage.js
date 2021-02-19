//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components

import { RegContainer, P } from '../styles/auth/authPage';

import AuthForm from './AuthForm';

const AuthPage = () => {
	return (
		<div>
			<RegContainer>
				<P>Выполняй задания, получи классные призы!</P>
				<AuthForm />
			</RegContainer>
		</div>
	);
};

AuthPage.propTypes = {};

export default AuthPage;
