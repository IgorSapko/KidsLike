//Core
import axios from 'axios';
//Redux
import contactsActions from './weekActions';
// import authActions from '../auth/authActions';

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com';

// Логіку перезапису балансу не робив, лише відправка на бек
const patchSwitch = (taskId, credential) => dispatch => {
	dispatch(contactsActions.patchSwitchRequest());
	console.log(taskId, credential);
	axios
		.patch(`/api/task/switch/${taskId}`, credential)
		.then(({ data }) => dispatch(contactsActions.patchSwitchSuccess(data)))
		.catch(error => dispatch(contactsActions.patchSwitchFailure(error)));
};

const patchWeek = (taskId, credential) => dispatch => {
	dispatch(contactsActions.patchWeekRequest());

	axios
		.patch(`/api/task/active/${taskId}`, credential)
		.then(({ data }) => dispatch(contactsActions.patchWeekSuccess(data)))
		.catch(error => dispatch(contactsActions.patchWeekFailure(error)));
};

export default { patchWeek, patchSwitch };
