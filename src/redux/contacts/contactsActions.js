//Core
import { createAction } from '@reduxjs/toolkit';

const contactsRequest = createAction('contacts/contactsRequest');
const contactsSuccess = createAction('contacts/contactsRequest');


const contactsActions = {
	contactsRequest,
	contactsSuccess,
	
};

export default contactsActions;
