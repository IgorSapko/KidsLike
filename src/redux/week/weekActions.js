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

const taskActiveSwitcherRequest = createAction('week/taskActiveSwitcherRequest');
const taskActiveSwitcherSuccess = createAction('week/taskActiveSwitcherSuccess');

export default {
    taskSwitcherRequest,
    taskSwitcherSuccess,
    // taskSwitcherFailure,
	taskActiveSwitcherRequest,
	taskActiveSwitcherSuccess


};
