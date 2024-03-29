import { createReducer, current } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import weekActions from './weekActions';

const weekReducer = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload.week,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.week,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.week,

	[weekActions.taskSwitcherSuccess]: (state, { payload }) => {
		const tasksArr = [...current(state).tasks];
		let currentTask;
		const newTotalArr = [];
		tasksArr.forEach(task => {
			if (task._id === payload.updatedTask.id || task.id === payload.updatedTask.id) {
				currentTask = { ...task };
				currentTask.days = [...payload.updatedTask.days];
				newTotalArr.push(currentTask);
				return;
			} else {
				return newTotalArr.push(task);
			}
		});
		return {
			...current(state),
			tasks: [...newTotalArr],
			pointsGained: payload.updatedWeekGainedPoints,
		};
	},

	[weekActions.taskActiveSwitcherSuccess]: (state, { payload }) => {
		const tasksArr = [...current(state).tasks];
		let currentTask;
		const newTotalArr = [];
		tasksArr.forEach(task => {
			if (task._id === payload.updatedTask.id || task.id === payload.updatedTask.id) {
				currentTask = { ...task };
				currentTask.days = [...payload.updatedTask.days];
				newTotalArr.push(currentTask);
				return;
			} else {
				return newTotalArr.push(task);
			}
		});
		return {
			...current(state),
			tasks: [...newTotalArr],
			pointsPlanned: payload.updatedWeekPlannedPoints,
		};
	},

	[weekActions.createCustomTaskSuccess]: (state, { payload }) => {
		return { ...current(state), tasks: [...state.tasks, payload] };
	},

	[weekActions.giftsGettingSuccess]: (state, { payload }) => {
		return { ...current(state), gifts: [...payload.gifts] };
	},

	[weekActions.giftsToggle]: (state, { payload }) => {
		const upddatedGiftsToggles = current(state).gifts.map(gift => {
			if (gift._id === payload) {
				const updatedGift = { ...gift, isSelected: !gift.isSelected };
				return updatedGift;
			}
			return gift;
		});
		return { ...current(state), gifts: [...upddatedGiftsToggles] };
	},

	[weekActions.giftsClearAllTogglers]: (state, { payload }) => {
		const updatedGifts = payload.map(gift => {
			return { ...gift, isSelected: false };
		});
		return { ...current(state), gifts: [...updatedGifts] };
	},
});

export default weekReducer;
