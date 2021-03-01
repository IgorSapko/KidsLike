//Core
import axios from 'axios';
//Redux
import weekActions from './weekActions';
import errorActions from '../error/errorActions';

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
		.catch(error => dispatch(errorActions.taskActiveSwitcherFailure(error)));
};

export default { taskSwitcher, taskActiveSwitcher };
