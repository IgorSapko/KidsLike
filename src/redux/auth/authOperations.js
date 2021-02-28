//Core
import axios from 'axios';
//Redux
import authActions from './authActions';
import errorActions from '../error/errorActions';

//Axios defaults config

axios.defaults.baseURL = `https://kids-like-backend-cloud.herokuapp.com`;

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

const userSignUp = credential => async dispatch => {
	dispatch(authActions.userSignUpRequest());
	try {
		console.log('credential', credential)
		const { data } = await axios.post('/api/auth/sign-up', credential);

		token.set(data.token);
		dispatch(authActions.userSignUpSuccess(data));
	} catch (error) {
		console.log('error', error);
		dispatch(errorActions.userSignUpFailure(error));
		// const { response } = error;
		// if (response.status === 409) {
		// 	alert('Provided email already exists');
		// }
	}
	// axios
	// 	.post('/api/auth/sign-up', credential)
	// 	.then(({ data }) => {
	// 		token.set(data.token);
	// 		dispatch(authActions.userSignUpSuccess(data));
	// 	})

	// 	.catch(error => {
	// 		const { response } = error;
	// 		if (response.status === 409) {
	// 			alert('Provided email already exists');
	// 		}
	// 	});
};

const userSignIn = credential => async dispatch => {
	dispatch(authActions.userSignInRequest());
	try {
		const { data } = await axios.post('/api/auth/sign-in', credential);
		console.log('credential',typeof credential)
		token.set(data.token);
		dispatch(authActions.userSignInSuccess(data));
	} catch (error) {
		console.log('error', error);
		dispatch(errorActions.userSignInFailure(error));

		// const { response } = error;
		// if (response.status === 400) {
		// 	alert('Wrong email or password');
		// } else if (response.status === 403) {
		// 	alert("Email doesn't exist or password is wrong");
		// }
	}
	// axios
	// 	.post('/api/auth/sign-in', credential)
	// 	.then(({ data }) => {
	// 		token.set(data.token);
	// 		dispatch(authActions.userSignInSuccess(data));
	// 	})

	// 	.catch(error => {
	// 		dispatch(errorActions.userSignInFailure(error))
	// 		const { response } = error;
	// 		if (response.status === 400) {
	// 			alert('Wrong email or password');
	// 		} else if (response.status === 403) {
	// 			alert("Email doesn't exist or password is wrong");
	// 		}
	// 	});
};

const userSighOut = () => async dispatch => {
	dispatch(authActions.userSighOutRequest());
	try {
		await axios.delete('/api/auth/sign-out');

		token.unset();
		dispatch(authActions.userSighOutSuccess());
	} catch (error) {
		dispatch(errorActions.userSighOutFailure(error));
	}
	// axios
	// 	.delete('/api/auth/sign-out')
	// 	.then(() => {
	// 		token.unset();
	// 		dispatch(authActions.userSighOutSuccess());
	// 	})
	// 	.catch(error => dispatch(errorActions.userSighOutFailure(error)));
};

const getCurrentUser = () => async (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());
	try {
		const { data } = await axios.get('/api/user/current');
		dispatch(authActions.getCurrentUserSuccess(data));
	} catch (error) {
		dispatch(errorActions.getCurrentUserFailure(error));
	}
	// axios
	// 	.get('/api/user/current')
	// 	.then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
	// 	.catch(error => dispatch(errorActions.getCurrentUserFailure(error)));
};

const authOperations = {
	userSignUp,
	userSignIn,
	userSighOut,
	getCurrentUser,
};

export default authOperations;
