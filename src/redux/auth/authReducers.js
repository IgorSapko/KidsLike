//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User reducer
const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.user,
	[authActions.userSighOutSuccess]: () => null,
});

//Token reducer
const token = createReducer(null, {
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.token,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.token,
	[authActions.userSighOutSuccess]: () => null,
});


const authRootReducer = combineReducers({
	user,
	token
});

export default authRootReducer ;
