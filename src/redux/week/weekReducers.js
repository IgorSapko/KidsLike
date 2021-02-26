//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './weekActions';

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

//Loading initial state
const initialLoadingState = false;

//Loading reducer
const loading = createReducer(initialLoadingState, {
	[contactsActions.patchWeekRequest]: () => true,
	[contactsActions.patchWeekSuccess]: () => initialLoadingState,
	[contactsActions.patchWeekFailure]: () => initialLoadingState,
});

export default combineReducers({
	// items,
	// balance,
	loading,
});
