import { createAction } from '@reduxjs/toolkit';

const taskSwitcherRequest = createAction('week/taskSwitcherRequest');
const taskSwitcherSuccess = createAction('week/taskSwitcherSuccess');

const taskActiveSwitcherRequest = createAction('week/taskActiveSwitcherRequest');
const taskActiveSwitcherSuccess = createAction('week/taskActiveSwitcherSuccess');


const createCustomTaskRequest = createAction('week/createCustomTaskRequest');
const createCustomTaskSuccess = createAction('week/createCustomTaskSuccess');

const giftsGettingRequest = createAction('week/giftsGettingRequest');
const giftsGettingSuccess = createAction('week/giftsGettingSuccess');

const giftsOrderRequest = createAction('week/giftsOrderRequest');
const giftsOrderSuccess = createAction('week/giftsOrderSuccess');


export default {
    taskSwitcherRequest,
    taskSwitcherSuccess,
 	taskActiveSwitcherRequest,
	taskActiveSwitcherSuccess,
     createCustomTaskRequest,
     createCustomTaskSuccess,
     giftsGettingRequest,
     giftsGettingSuccess,
     giftsOrderRequest,
     giftsOrderSuccess
};
