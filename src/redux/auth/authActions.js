//Core
import { createAction } from '@reduxjs/toolkit';

const userSignUpRequest = createAction('auth/userSignUpRequest');
const userSignUpSuccess = createAction('auth/userSignUpSuccess');

const userSignInRequest = createAction('auth/userSignInRequest');
const userSignInSuccess = createAction('auth/userSignInSuccess');

const userSighOutRequest = createAction('auth/userSighOutRequest');
const userSighOutSuccess = createAction('auth/userSighOutSuccess');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');

const authActions = {
	userSignUpRequest,
	userSignUpSuccess,
	userSignInRequest,
	userSignInSuccess,
	userSighOutRequest,
	userSighOutSuccess,
	getCurrentUserRequest,
	getCurrentUserSuccess,
};

export default authActions;
