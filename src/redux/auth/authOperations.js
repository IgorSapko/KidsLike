//Core
import axios from 'axios';
//Redux
import authActions from './authActions';
import errorActions from '../error/errorActions';

//Axios defaults config
axios.defaults.baseURL = `https://kids-like-backend-cloud.herokuapp.com/`;

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

const userSignUp = ({ credential }) => dispatch => {
	dispatch(authActions.userSignUpRequest());

	axios
		.post('/api/auth/sign-up', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignUpSuccess(data));
		})
		.catch(error => dispatch(errorActions.userSignUpFailure(error)));
};

const userSignIn = credential => dispatch => {
	dispatch(authActions.userSignInRequest());

	axios
		.post('/api/auth/sign-in', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignInSuccess(data));
		})
		.catch(error => dispatch(errorActions.userSignInFailure(error)));
};

const userSighOut = () => dispatch => {
	dispatch(authActions.userSighOutRequest());

	axios
		.delete('/api/auth/sign-out')
		.then(() => {
			token.unset();
			dispatch(authActions.userSighOutSuccess());
		})
		.catch(error => dispatch(errorActions.userSighOutFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/api/user/current')
		.then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
		.catch(error => dispatch(errorActions.getCurrentUserFailure(error)));
};

const authOperations = {
	userSignUp,
	userSignIn,
	userSighOut,
	getCurrentUser,
};

export default authOperations;
