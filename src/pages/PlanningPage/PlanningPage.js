//Core

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import weekOperations from '../../redux/week/weekOperation';
// import planningOperations from '../../redux/planning/planningOperations';

import CardList from '../../components/Commons/CardList/CardList';

//Components
import AddCustomTask from '../../components/Commons/AddCustomTask/AddCustomTask';
import NewTaskModal from '../../components/Commons/NewTaskModal/NewTaskModal';
import PlanningPoints from '../../components/Commons/PlanningPoints/PlanningPoints';
import CurrentWeek from '../../components/Commons/CurrentWeek/CurrentWeek';
// import planningSelector from '../../redux/planning/planningSelectors';
import { PlanningPageBlock, PlanningPageInfo } from './planningPage.styles';

const PlanningPage = () => {
	const startWeekDay = useSelector(state => state.week.startWeekDate);
	const endWeekDay = useSelector(state => state.week.endWeekDate);
	// const week = useSelector(state => state.week);
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
	const dispatch = useDispatch();
	const points = useSelector(state => state.week.pointsPlanned);

	const modalVisible = () => {
		setOpenAddTaskModal(true);
	};

	const modalHidden = () => {
		setOpenAddTaskModal(false);
	};

	const addCustomTaskAndGetNewData = (title, rewardToNumber, taskAvatar) => {
		dispatch(weekOperations.createCustomTask(title, rewardToNumber, taskAvatar));
		// dispatch(authOperations.getCurrentUser());

		setOpenAddTaskModal(false);
	};

	const currentWeek = () => {
		const endDay = endWeekDay.replace(/-/gi, '.');

		if (startWeekDay.slice(0, 1) === '0') {
			return `${startWeekDay.slice(1, 2)} - ${endDay}`;
		}

		return `${startWeekDay.slice(0, 2)} - ${endDay}`;
	};

	return (
		<PlanningPageBlock>
			<PlanningPageInfo>
				<CurrentWeek week={currentWeek()} />
				<PlanningPoints points={points} />
				<AddCustomTask swowModal={modalVisible} />
			</PlanningPageInfo>
			<CardList />
			{openAddTaskModal === true ? (
				<NewTaskModal addTask={addCustomTaskAndGetNewData} closeModal={modalHidden} />
			) : null}
		</PlanningPageBlock>
	);
};

PlanningPage.propTypes = {};

export default PlanningPage;
