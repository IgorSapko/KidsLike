//Core
import { createAction } from '@reduxjs/toolkit';

const getCurrentUserFailure = createAction('auth/getCurrentUserFailure');
const userSignUpFailure = createAction('auth/userSignUpFailure');
const userSignInFailure = createAction('auth/userSignInFailure');
const userSighOutFailure = createAction('auth/userSighOutFailure');
const unsetErrorMessage = createAction('auth/unsetErrorMessage');
const taskSwitcherFailure = createAction('week/taskSwitcherFailure');
const taskActiveSwitcherFailure = createAction('week/taskActiveSwitcherFailure');
const contactsFailure = createAction('contacts/contactsFailure');



const errorActions ={
    getCurrentUserFailure,
    userSignUpFailure,
    userSignInFailure,
    userSighOutFailure,
    unsetErrorMessage,
    taskSwitcherFailure,
    taskActiveSwitcherFailure,
    contactsFailure,

 };
export default errorActions 
