import { createReducer } from '@reduxjs/toolkit';
// import loaderActions from '../loader/loaderActions';

import authActions from '../auth/authActions';

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
	[authActions.getCurrentUserFailure]: () => false,

	[authActions.userSignUpRequest]: () => true,
	[authActions.userSignUpSuccess]: () => false,
	[authActions.userSignUpFailure]: () => false,

	[authActions.userSignInRequest]: () => true,
	[authActions.userSignInSuccess]: () => false,
	[authActions.userSignInFailure]: () => false,

	[authActions.userSighOutRequest]: () => true,
	[authActions.userSighOutSuccess]: () => false,
	[authActions.userSighOutFailure]: () => false,
});

export default loaderReducer;

