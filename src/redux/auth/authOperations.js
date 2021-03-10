import axios from 'axios';
import authActions from './authActions';
import errorActions from '../error/errorActions';

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
		const { data } = await axios.post('/api/auth/sign-up', credential);
		token.set(data.token);
		dispatch(authActions.userSignUpSuccess(data));
	} catch (error) {
		console.log( error.response.data)
		dispatch(errorActions.error(error.response.data));
		const { response } = error;
		if (response.status === 409) {
			alert('Provided email already exists');
		}
	}
};

const userSignIn = credential => async dispatch => {
	dispatch(authActions.userSignInRequest());
	try {
		const { data } = await axios.post('/api/auth/sign-in', credential);
		token.set(data.token);
		dispatch(authActions.userSignInSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error.response.data));
	}
};

const userSighOut = () => async dispatch => {
	dispatch(authActions.userSighOutRequest());
	try {
		await axios.post('/api/auth/sign-out');
		token.unset();
		dispatch(authActions.userSighOutSuccess());
	} catch (error) {
		dispatch(errorActions.error(error.response.data));
	}
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
		dispatch(errorActions.error(error.response.data));
	}
};

const userSignInGoogle = accessToken => async dispatch => {
	dispatch(authActions.userSignInGoogleRequest());
	try {
		token.set(accessToken);
		dispatch(authActions.userSignInGoogleSuccess(accessToken));
	} catch (error) {
		dispatch(errorActions.error(error.response.data));
	}
};

const authOperations = {
	userSignUp,
	userSignIn,
	userSighOut,
	getCurrentUser,
	userSignInGoogle,
};

export default authOperations;
