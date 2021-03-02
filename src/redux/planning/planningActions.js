import { createAction } from '@reduxjs/toolkit';


const addDayForTaskRequest = createAction('planning/addDayForTaskRequest');
const addDayForTaskSuccess = createAction('planning/addDayForTaskSuccess');
const addDayForTaskError = createAction('planning/addDayForTaskError');

const createCustomTaskRequest = createAction('planning/createCustomTaskRequest');
const createCustomTaskSuccess = createAction('planning/createCustomTaskSuccess');
const createCustomTaskError = createAction('planning/createCustomTaskError');

const planningActions = {
    addDayForTaskRequest,
    addDayForTaskSuccess,
    addDayForTaskError,

    createCustomTaskRequest,
    createCustomTaskSuccess,
    createCustomTaskError
}

export default planningActions