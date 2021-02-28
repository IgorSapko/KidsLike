//Core
// import { createAction } from '@reduxjs/toolkit';

// const getCurrentUserWeekSuccess = createAction('week/getCurrentUserWeekSuccess');

// const weekActions = {
// 	getCurrentUserWeekSuccess,
// };

// export default weekActions;

//Core
import { createAction } from '@reduxjs/toolkit';

const taskSwitcherRequest = createAction('week/taskSwitcherRequest');
const taskSwitcherSuccess = createAction('week/taskSwitcherSuccess');
// const taskSwitcherFailure = createAction('week/taskSwitcherFailure');


const patchWeekRequest = createAction('week/patchWeekRequest');
const patchWeekSuccess = createAction('week/patchWeekSuccess');
const patchWeekFailure = createAction('week/patchWeekFailure');

const addBallSuccess = createAction('week/addBallSuccess');
const removeBallSuccess = createAction('week/removeBallSuccess');

export default {
    taskSwitcherRequest,
    taskSwitcherSuccess,
    // taskSwitcherFailure,


	patchWeekRequest,
	patchWeekSuccess,
	patchWeekFailure,

	addBallSuccess,
	removeBallSuccess,
};
