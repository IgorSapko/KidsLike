//Core
import { createAction } from '@reduxjs/toolkit';

const patchWeekRequest = createAction('week/patchWeekRequest');
const patchWeekSuccess = createAction('week/patchWeekSuccess');
const patchWeekFailure = createAction('week/patchWeekFailure');

const patchSwitchRequest = createAction('week/patchSwitchRequest');
const patchSwitchSuccess = createAction('week/patchSwitchSuccess');
const patchSwitchFailure = createAction('week/patchSwitchFailure');

<<<<<<< HEAD
export default {
	patchWeekRequest,
	patchWeekSuccess,
	patchWeekFailure,

	patchSwitchRequest,
	patchSwitchSuccess,
	patchSwitchFailure,
=======
// export default weekActions;

//Core
import { createAction } from '@reduxjs/toolkit';

const taskSwitcherRequest = createAction('week/taskSwitcherRequest');
const taskSwitcherSuccess = createAction('week/taskSwitcherSuccess');
// const taskSwitcherFailure = createAction('week/taskSwitcherFailure');

const taskActiveSwitcherRequest = createAction('week/taskActiveSwitcherRequest');
const taskActiveSwitcherSuccess = createAction('week/taskActiveSwitcherSuccess');

export default {
    taskSwitcherRequest,
    taskSwitcherSuccess,
    // taskSwitcherFailure,
	taskActiveSwitcherRequest,
	taskActiveSwitcherSuccess


>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
};
