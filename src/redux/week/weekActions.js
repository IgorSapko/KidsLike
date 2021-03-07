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


const createCustomTaskRequest = createAction('week/createCustomTaskRequest');
const createCustomTaskSuccess = createAction('week/createCustomTaskSuccess');
const createCustomTaskError = createAction('week/createCustomTaskError');

const giftsRequest = createAction('week/giftsSwitcherRequest');
const giftsSuccess = createAction('week/giftsSwitcherSuccess');
const giftsFialure = createAction('week/giftsSwitcherSuccess');

export default {
    taskSwitcherRequest,
    taskSwitcherSuccess,
    // taskSwitcherFailure,
	taskActiveSwitcherRequest,
	taskActiveSwitcherSuccess,


     createCustomTaskRequest,
     createCustomTaskSuccess,
     createCustomTaskError ,
};
