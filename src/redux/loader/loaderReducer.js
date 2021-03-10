import { createReducer } from '@reduxjs/toolkit';
// import loaderActions from '../loader/loaderActions';

import authActions from '../auth/authActions';
import errorActions from '../error/errorActions';
import weekActions from '../week/weekActions';
import loaderActions from './loaderActions';

//Loading reducer
const loaderReducer = createReducer(false, {
	[authActions.getCurrentUserRequest]: () => true,
	[authActions.getCurrentUserSuccess]: () => false,

	[authActions.userSignUpRequest]: () => true,
	[authActions.userSignUpSuccess]: () => false,

	[authActions.userSignInRequest]: () => true,
	[authActions.userSignInSuccess]: () => false,

	[authActions.userSighOutRequest]: () => true,
	[authActions.userSighOutSuccess]: () => false,

	[weekActions.taskSwitcherRequest]: () => true,
	[weekActions.taskSwitcherSuccess]: () => false,

	[weekActions.taskActiveSwitcherRequest]: () => true,
	[weekActions.taskActiveSwitcherSuccess]: () => false,

	[weekActions.giftsGettingRequest]: () => true,
	[weekActions.giftsGettingSuccess]: () => false,

	[weekActions.giftsOrderRequest]: () => true,
	[weekActions.giftsOrderSuccess]: () => false,

	[weekActions.createCustomTaskRequest]: () => true,
	[weekActions.createCustomTaskSuccess]: () => false,

	[loaderActions.contactsRequest]: () => true,
	[loaderActions.contactsSuccess]: () => false,
	
	[errorActions.error]: () => false,
});

export default loaderReducer;
