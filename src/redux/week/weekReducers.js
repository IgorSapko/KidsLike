//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import weekActions from './weekActions';
import authActions from '../auth/authActions';

const weekReducer = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.week,
	// [authActions.userSignUpSuccess]: (state, { payload }) => {return {...payload.week, tasks:[...payload.week.tasks.map(task=>{ [...task.days.filter=>day.isActive]})]},
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.week,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.week,
	
});

export default weekReducer;
