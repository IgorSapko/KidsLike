//Core
import { createAction } from '@reduxjs/toolkit';

const patchWeekRequest = createAction('week/patchWeekRequest');
const patchWeekSuccess = createAction('week/patchWeekSuccess');
const patchWeekFailure = createAction('week/patchWeekFailure');

const patchSwitchRequest = createAction('week/patchSwitchRequest');
const patchSwitchSuccess = createAction('week/patchSwitchSuccess');
const patchSwitchFailure = createAction('week/patchSwitchFailure');

export default {
	patchWeekRequest,
	patchWeekSuccess,
	patchWeekFailure,

	patchSwitchRequest,
	patchSwitchSuccess,
	patchSwitchFailure,
};
