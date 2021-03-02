//Core
import { combineReducers } from 'redux';
import { createReducer, current } from '@reduxjs/toolkit';

// import weekActions from './weekActions';
import authActions from '../auth/authActions';
import planningActions from './planningActions';

const planningReducer = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.week,
	[planningActions.createCustomTaskSuccess]:(state, action)=> (console.log(action.payload, state))
	
});

export default planningReducer