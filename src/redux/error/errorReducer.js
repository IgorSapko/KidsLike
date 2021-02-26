//Core
import { createReducer } from '@reduxjs/toolkit';
import errorActions from '../error/errorActions';

const errorReducer = createReducer(null, {
	[errorActions.getCurrentUserFailure]: (state, { payload }) => payload.message,
	[errorActions.userSignUpFailure]: (state, { payload }) => payload,
	[errorActions.userSignInFailure]: (state, { payload }) => payload,
	[errorActions.userSighOutFailure]: (state, { payload }) => payload,
	[errorActions.unsetErrorMessage]: (state, { payload }) => null,
});

export default errorReducer