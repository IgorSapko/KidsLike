//Core
import { combineReducers } from 'redux';
import { createReducer, current } from '@reduxjs/toolkit';

// import weekActions from './weekActions';
import authActions from '../auth/authActions';
import weekActions from './weekActions';

const weekReducer = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.week,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.week,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.week,

	[weekActions.taskSwitcherSuccess]: (state, { payload }) => {
		const tasksArr = [...current(state).tasks];
		let currentTask;
		const arrWithoutCurrentTask = [];
		tasksArr.forEach(task => {
			if (task._id === payload.updatedTask.id) {
				currentTask = { ...task };
				currentTask.days = [...payload.updatedTask.days];
				return;
			} else {
				console.log('task', task);
				return arrWithoutCurrentTask.push(task);
			}
		});
		return { ...current(state), tasks: [...arrWithoutCurrentTask, currentTask] };
	},
});

// //Items initial state
// const initialItemsState = [];

// //Items reducer handler
// const getContacts = (state, { payload }) => payload;
// // const addContact = (state, { payload }) => [...state, payload];

// //Items reducer
// const items = createReducer(initialItemsState, {
// 	[contactsActions.patchWeekSuccess]: getContacts,
// 	// [contactsActions.addContactSuccess]: addContact
// });

// //Ball reducer handler
// const addBall = (state, { payload }) => state + payload;
// const removeBall = (state, { payload }) => state - payload;

// //Items reducer
// const balance = createReducer(0, {
// 	[contactsActions.addBallSuccess]: addBall,
// 	[contactsActions.removeBallSuccess]: removeBall,
// });

// //Loading initial state
// const initialLoadingState = false;

// //Loading reducer
// const loading = createReducer(initialLoadingState, {
// 	[contactsActions.patchWeekRequest]: () => true,
// 	[contactsActions.patchWeekSuccess]: () => initialLoadingState,
// 	[contactsActions.patchWeekFailure]: () => initialLoadingState,
// });

export default weekReducer;
