import React from 'react';
import { useSelector } from 'react-redux';
import {
	HeaderblockcontactInform,
	HeaderblockcontactBlockFirstLetter,
	FirstLetter,
} from './UserInfo.style';

const UserInfo = () => {
const 	email = useSelector(state=>state.auth.user.email);
	return (
		<>
			<HeaderblockcontactBlockFirstLetter>
				<FirstLetter>{email.slice(0, 1).toUpperCase()}</FirstLetter>
			</HeaderblockcontactBlockFirstLetter>
			<HeaderblockcontactInform>{email}</HeaderblockcontactInform>
		</>
	);
};



export default UserInfo;
