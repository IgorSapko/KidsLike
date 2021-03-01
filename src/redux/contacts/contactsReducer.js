//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './contactsActions';

//User reducer
const contactsReducer = createReducer([], {
	[contactsActions.contactsSuccess]: (state, { payload }) => payload,

});

export default contactsReducer ;