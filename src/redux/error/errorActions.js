//Core
import { createAction } from '@reduxjs/toolkit';

const unsetErrorMessage = createAction('auth/unsetErrorMessage');
const error = createAction('total/error');

const errorActions = {
	unsetErrorMessage,
	error,
};
export default errorActions;
