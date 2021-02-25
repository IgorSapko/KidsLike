//Core
import axios from 'axios';
//Redux
import contactsActions from './weekActions';

axios.defaults.baseURL = 'https://kids-like-backend.herokuapp.com';

const patchWeek = (taskId, credential) => dispatch => {
	dispatch(contactsActions.patchWeekRequest());

	axios
		.patch(`/api/task/active/${taskId}`, credential)
		.then(({ data }) => dispatch(contactsActions.patchWeekSuccess(data)))
		.catch(error => dispatch(contactsActions.patchWeekFailure(error)));
};

export default { patchWeek };
