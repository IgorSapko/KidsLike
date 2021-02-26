//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';
import weekActions from '../week/weekActions';

// const patchBalance = (state, { payload }) => {
// 	return {
// 		[...state.user.user.balance],
// 		...payload.user.user.balance,
// 	};
// };
//User reducer
const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.user,
	// [weekActions.patchSwitchSuccess]: (state, { payload }) => patchBalance,
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
	token,
});

export default authRootReducer;
