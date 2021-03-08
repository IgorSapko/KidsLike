//Core
import axios from 'axios';
//Redux
import planningActions from './planningActions';
import errorActions from '../error/errorActions';

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com/';



const daysForTask = (taskId, days) => dispatch => {
	dispatch(planningActions.addDayForTaskRequest());
	console.log(`/api/task/active/${taskId}`);
	console.log(days);
	axios
		.patch(`/api/task/active/${taskId}`, days)
		.then(({ data }) => {
			dispatch(planningActions.addDayForTaskSuccess(data));
			console.log('Days changed');
		})
		.catch(error => dispatch(errorActions.addDayForTaskError(error)));
};

const createCustomTask = (title, reward, taskAvatar) => dispatch => {
	dispatch(planningActions.createCustomTaskRequest());

	axios
		.post(`/api/task`, {title, reward}, taskAvatar)
		.then(({ data }) => {
			dispatch(planningActions.createCustomTaskSuccess(data));
			console.log('Custom task created');
		})
		.catch(error => dispatch(planningActions.createCustomTaskError(error)));
};



const planningOperations = {
	daysForTask,
	createCustomTask,
};

export default planningOperations;