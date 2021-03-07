//Core
import axios from 'axios';
//Redux
import weekActions from './weekActions';
import errorActions from '../error/errorActions';
import authActions from '../auth/authActions';

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com/';

const taskSwitcher = (taskId, date) => dispatch => {
	const formatedDate = {
		date: date,
	};
	dispatch(weekActions.taskSwitcherRequest());
	axios
		.patch(`/api/task/switch/${taskId}`, formatedDate)
		.then(({ data }) => {
			dispatch(weekActions.taskSwitcherSuccess(data));
			dispatch(authActions.userGetNewBalanceSwitchSuccess(data));
		})
		.catch(error => dispatch(errorActions.taskSwitcherFailure(error)));
};

const taskActiveSwitcher = (taskId, daysArr) => dispatch => {
	console.log('taskId', taskId);
	console.log('daysArr', daysArr);
	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
	const correctArr = days.map(day => {
		if (
			daysArr.find(plannedDay => {
				if (plannedDay === day) {
					return true;
				}
			})
		) {
			return true;
		} else {
			return false;
		}
	});
	console.log('correctArr', correctArr);
	const formatedArr = {
		days: [...correctArr],
	};
	dispatch(weekActions.taskActiveSwitcherRequest());
	axios
		.patch(`/api/task/active/${taskId}`, formatedArr)
		.then(({ data }) => {
			dispatch(weekActions.taskActiveSwitcherSuccess(data));
		})
		.catch(error => {console.log('err', error); dispatch(errorActions.taskActiveSwitcherFailure(error))});
};

const createCustomTask = formData => dispatch => {
	dispatch(weekActions.createCustomTaskRequest());
	const data = new FormData(formData.current);
	axios
		.post(`/api/task`, data)
		.then(({ data }) => {
			dispatch(weekActions.createCustomTaskSuccess(data));
			console.log('Custom task created');
		})
		.catch(error => dispatch(weekActions.createCustomTaskError(error)));
};

const giftsGetting = () => async dispatch => {
	dispatch(weekActions.giftsGettingRequest());
	try {
		const { data } = await axios.get(`https://kids-like-backend-cloud.herokuapp.com/api/gift`);
		console.log('data', data);
		dispatch(weekActions.giftsGettingSuccess(data));
	} catch (error) {
		dispatch(errorActions.giftsGettingFialure(error));
	}
};

const giftsOrder = giftId => async dispatch => {
	dispatch(weekActions.giftsOrderRequest());
	try {
		const { data } = await axios.patch(
			`https://kids-like-backend-cloud.herokuapp.com/api/gift`,
			giftId,
		);
		console.log('data', data);
		// dispatch(weekActions.giftsOrderSuccess(data));
	} catch (error) {
		dispatch(errorActions.giftsOrderFialure(error));
	}
};

export default { taskSwitcher, taskActiveSwitcher, createCustomTask, giftsGetting, giftsOrder };
