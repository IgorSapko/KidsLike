//Core
import { createAction } from '@reduxjs/toolkit';

const patchWeekRequest = createAction('week/patchWeekRequest');
const patchWeekSuccess = createAction('week/patchWeekSuccess');
const patchWeekFailure = createAction('week/patchWeekFailure');

const addBallSuccess = createAction('week/addBallSuccess');
const removeBallSuccess = createAction('week/removeBallSuccess');

export default {
	patchWeekRequest,
	patchWeekSuccess,
	patchWeekFailure,

	addBallSuccess,
	removeBallSuccess,
};
