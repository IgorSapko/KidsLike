//Core
import React from 'react';
import { connect } from 'react-redux';

import {
	HeaderblockcontactInform,
	HeaderblockcontactBlockFirstLetter,
	FirstLetter,
} from './UserInfo.style';
const UserInfo = ({ email }) => {
	return (
		<>
			<HeaderblockcontactBlockFirstLetter>
				<FirstLetter>{email.slice(0, 1).toUpperCase()}</FirstLetter>
			</HeaderblockcontactBlockFirstLetter>
			<HeaderblockcontactInform>{email}</HeaderblockcontactInform>
		</>
	);
};

const mapStateToProps = state => ({
	email: state.auth.user.email,
});

export default connect(mapStateToProps, null)(UserInfo);
