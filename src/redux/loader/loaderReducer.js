import { createReducer } from '@reduxjs/toolkit';
// import loaderActions from '../loader/loaderActions';

import authActions from '../auth/authActions';
import errorActions from '../error/errorActions';
import weekActions from '../week/weekActions';
import contactsActions from '../contacts/contactsActions'
// const initialState = false;
// const loaderReducer = createReducer(initialState, {
//   [loaderActions.loaderON]: (state, action) => {
//     return true;
//   },

//   [loaderActions.loaderOFF]: (state, action) => {
//     return false;
//   },
// });


//Loading reducer
const loaderReducer = createReducer(false, {
	[authActions.getCurrentUserRequest]: () => true,
	[authActions.getCurrentUserSuccess]: () => false,
	[errorActions.getCurrentUserFailure]: () => false,

	[authActions.userSignUpRequest]: () => true,
	[authActions.userSignUpSuccess]: () => false,
	[errorActions.userSignUpFailure]: () => false,

	[authActions.userSignInRequest]: () => true,
	[authActions.userSignInSuccess]: () => false,
	[errorActions.userSignInFailure]: () => false,

	[authActions.userSighOutRequest]: () => true,
	[authActions.userSighOutSuccess]: () => false,
	[errorActions.userSighOutFailure]: () => false,

	[weekActions.taskSwitcherRequest]: () => true,
	[weekActions.taskSwitcherSuccess]: () => false,
	[weekActions.taskSwitcherFailure]: () => false,

	[contactsActions.contactsRequest]: () => true,
	[contactsActions.contactsSuccess]: () => false,
	[errorActions.contactsFailure]: () => false,

	[weekActions.taskActiveSwitcherRequest]: () => true,
	[weekActions.taskActiveSwitcherSuccess]: () => false,
	[weekActions.taskActiveSwitcherFailure]: () => false,
});

export default loaderReducer;

