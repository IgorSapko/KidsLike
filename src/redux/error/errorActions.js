//Core
import { createAction } from '@reduxjs/toolkit';

const getCurrentUserFailure = createAction('auth/getCurrentUserFailure');
const userSignUpFailure = createAction('auth/userSignUpFailure');
const userSignInFailure = createAction('auth/userSignInFailure');
const userSighOutFailure = createAction('auth/userSighOutFailure');
const unsetErrorMessage = createAction('auth/unsetErrorMessage');
const getCurrentUserWeekFailure = createAction('week/getCurrentUserWeekFailure');

const errorActions ={
    getCurrentUserFailure,
    userSignUpFailure,
    userSignInFailure,
    userSighOutFailure,
    unsetErrorMessage,
    getCurrentUserWeekFailure
};
export default errorActions 
