//Core

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import authOperations from '../redux/auth/authOperations'
import planningOperations from "../redux/planning/planningOperations"

import CardList from '../components/Commons/CardList/CardList'

//Components
import AddCustomTask from '../components/Commons/AddCustomTask/AddCustomTask';
import NewTaskModal from '../components/Commons/NewTaskModal/NewTaskModal'
import PlanningPoints from '../components/Commons/PlanningPoints/PlanningPoints'


import planningSelector from '../redux/planning/planningSelectors';

const PlanningPage = () => {

	const startWeekDay = useSelector(state => state.week.startWeekDate);
	const planningPoints = useSelector(state => state.week.pointsPlanned);
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
	const dispatch = useDispatch()
	
	
	
	
	let currentDay = startWeekDay;
	let arrWithDate = startWeekDay.split('-');
	let stringWithNextDay = String(Number(arrWithDate[0]) + 1);
	if (stringWithNextDay < 10) {
		stringWithNextDay = `0${stringWithNextDay}`;
	}
	arrWithDate.splice(0, 1, stringWithNextDay);
	let arrWithNextDay = arrWithDate;
	const nextDay = arrWithNextDay.join('-');
	currentDay = nextDay;
	const modalVisible = () => {
		
		setOpenAddTaskModal(true);
		
		
	};
	const modalHidden = () => {
		 setOpenAddTaskModal(false);
	 }
	const AddCustomTaskAndGetNewData = (title, rewardToNumber, taskAvatar) => {
		dispatch(planningOperations.createCustomTask(title, rewardToNumber, taskAvatar));
		dispatch(authOperations.getCurrentUser())
		setOpenAddTaskModal(false);
	};
	console.log(openAddTaskModal);
	return (
		<>
			<div>PlanningPage</div>
			<div>
				<div>Current week</div>
				<PlanningPoints points={planningPoints} />
				<div>
					<AddCustomTask swowModal={modalVisible} />
					{openAddTaskModal === true ? (<NewTaskModal addTask={AddCustomTaskAndGetNewData} closeModal={ modalHidden}/>):(null)}
				</div>
			</div>
			<CardList currentDay={currentDay} />
		</>
	);

};

PlanningPage.propTypes = {};

export default PlanningPage;
