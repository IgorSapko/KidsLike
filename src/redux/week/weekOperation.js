//Core
import axios from 'axios';
//Redux
import weekActions from './weekActions';
import errorActions from '../error/errorActions'

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com/';


const taskSwitcher = (taskId, date) => dispatch => {
	dispatch(weekActions.taskSwitcherRequest());
console.log(`/api/task/switch/${taskId}`);
console.log(date)
	axios
		.patch(`/api/task/switch/${taskId}`,date)
		.then(({ data }) => {dispatch(weekActions.taskSwitcherSuccess(data)); console.log('111')})
		.catch(error => dispatch(errorActions.taskSwitcherFailure(error)));
};


// const patchWeek = (taskId, credential) => dispatch => {
// 	dispatch(contactsActions.patchWeekRequest());

// 	axios
// 		.patch(`/api/task/active/${taskId}`, credential)
// 		.then(({ data }) => dispatch(contactsActions.patchWeekSuccess(data)))
// 		.catch(error => dispatch(contactsActions.patchWeekFailure(error)));
// };

export default {taskSwitcher,
	//  patchWeek
 };