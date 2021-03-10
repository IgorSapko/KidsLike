import { combineReducers } from 'redux';
import { createReducer, current } from '@reduxjs/toolkit';
import authActions from './authActions';
import weekActions from '../week/weekActions'

//User reducer
const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.user,
	[authActions.userSighOutSuccess]: () => null,
	[weekActions.taskSwitcherSuccess]: (state, { payload }) => {
		return { ...current(state), balance: payload.updatedBalance };
	},
	[weekActions.giftsOrderSuccess]: (state, { payload }) => {
		return { ...current(state), balance: payload.updatedBalance };
	},
	
});

//Token reducer
const token = createReducer(null, {
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.token,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.token,
	[authActions.userSighOutSuccess]: () => null,
	[authActions.userSignInGoogleSuccess]: (state, { payload }) => payload,
});

const authRootReducer = combineReducers({
	user,
	token,
});

export default authRootReducer;
