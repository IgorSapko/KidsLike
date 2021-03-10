import axios from 'axios';
import weekActions from './weekActions';
import errorActions from '../error/errorActions';
import { daysOfWeek } from '../../utils/Helpers';

axios.defaults.baseURL = 'https://kids-like-backend-cloud.herokuapp.com/';

const taskSwitcher = (taskId, date) => async dispatch => {
	try {
		const formatedDate = {
			date: date,
		};
		dispatch(weekActions.taskSwitcherRequest());
		const { data } = await axios.patch(`/api/task/switch/${taskId}`, formatedDate);
		dispatch(weekActions.taskSwitcherSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const taskActiveSwitcher = (taskId, daysArr) => async dispatch => {
	try {
		const correctArr = daysOfWeek.map(day => {
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
		const formatedArr = {
			days: [...correctArr],
		};
		dispatch(weekActions.taskActiveSwitcherRequest());
		const { data } = await axios.patch(`/api/task/active/${taskId}`, formatedArr);
		dispatch(weekActions.taskActiveSwitcherSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const createCustomTask = formData => async dispatch => {
	try {
		dispatch(weekActions.createCustomTaskRequest());
		const dataForm = new FormData(formData.current);
		const { data } = await axios.post(`/api/task`, dataForm);
		dispatch(weekActions.createCustomTaskSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const giftsGetting = () => async dispatch => {
	dispatch(weekActions.giftsGettingRequest());
	try {
		const { data } = await axios.get(`https://kids-like-backend-cloud.herokuapp.com/api/gift`);
		dispatch(weekActions.giftsGettingSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const giftsOrder = giftId => async dispatch => {
	dispatch(weekActions.giftsOrderRequest());
	try {
		const { data } = await axios.patch(
			`https://kids-like-backend-cloud.herokuapp.com/api/gift`,
			giftId,
		);
		dispatch(weekActions.giftsOrderSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

export default { taskSwitcher, taskActiveSwitcher, createCustomTask, giftsGetting, giftsOrder };
