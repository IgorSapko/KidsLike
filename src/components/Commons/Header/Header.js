import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import contactsActions from '../../../redux/contacts/contactsActions'
import getContactsOperation from '../../../redux/contacts/contactsOperation'


const Header = () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	
    const dispatch = useDispatch();
	const getContacts =  event => {
      dispatch(getContactsOperation.getContacts())
		// event.preventDefault()
    }
	return (
		<>
			<NavLink to="/contacts" alt="Contacts page" onClick={event => getContacts(event)}>
				Contacts page
			</NavLink>
		</>
	);
};

export default Header;
