//Core
import axios from 'axios';
//Redux
import contactsActions from './contactsActions';
import errorActions from '../error/errorActions';

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com/';

const getContacts = () => async dispatch => {
	try {
		dispatch(contactsActions.contactsRequest);
		const { data } = await axios.get(
			'https://kids-like-backend-cloud.herokuapp.com/api/team/contacts',
		);
		dispatch(contactsActions.contactsSuccess(data));
	} catch (error) {
		dispatch(errorActions.contactsFailure(error));
	}
};
export default { getContacts };
