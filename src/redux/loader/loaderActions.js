import { createAction } from '@reduxjs/toolkit';

const contactsRequest = createAction('contacts/contactsRequest');
const contactsSuccess = createAction('contacts/contactsSuccess');

export default { contactsRequest, contactsSuccess };
