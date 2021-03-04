//Core

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import authOperations from '../../redux/auth/authOperations'
import planningOperations from "../../redux/planning/planningOperations"

import CardList from '../../components/Commons/CardList/CardList'

//Components
import AddCustomTask from '../../components/Commons/AddCustomTask/AddCustomTask';
import NewTaskModal from '../../components/Commons/NewTaskModal/NewTaskModal'
import PlanningPoints from '../../components/Commons/PlanningPoints/PlanningPoints'
import CurrentWeek from '../../components/Commons/CurrentWeek/CurrentWeek'
import Navigation from '../../components/Commons/Navigation/Navigation';
import planningSelector from '../../redux/planning/planningSelectors';

// import device from '../../device'
// console.log(device.mobile)

import { PlanningPageBlock, PlanningPageInfo } from './planningPage.styles';
const PlanningPage = () => {

	const startWeekDay = useSelector(state => state.week.startWeekDate);
	const endWeekDay = useSelector(state => state.week.endWeekDate);
	// const planningPoints = useSelector(state => state.week.pointsPlanned);
	const week = useSelector(state => state.week);
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
	
	const addCustomTaskAndGetNewData = (title, rewardToNumber, taskAvatar) => {
		dispatch(planningOperations.createCustomTask(title, rewardToNumber, taskAvatar));
		dispatch(authOperations.getCurrentUser())
		
		setOpenAddTaskModal(false);
	};
	const AddPlanningPoins = () => {
		dispatch(authOperations.getCurrentUser());
		return useSelector(state => state.week.pointsPlanned);
	
	}

	const currentWeek = () => {
		const endDay = endWeekDay.replace(/-/gi, '.');

		if (startWeekDay.slice(0, 1) === "0") {
			return `${startWeekDay.slice(1, 2)} - ${endDay}`
		}

		return `${startWeekDay.slice(0, 2)} - ${endDay}`;
	};
	
	return (
		<PlanningPageBlock>
			<Navigation />
			<PlanningPageInfo>
				<CurrentWeek week={currentWeek()} />
				<PlanningPoints points={AddPlanningPoins()} />

				<AddCustomTask swowModal={modalVisible} />
			</PlanningPageInfo>
			<CardList currentDay={currentDay} />
			{openAddTaskModal === true ? (
				<NewTaskModal addTask={addCustomTaskAndGetNewData} closeModal={modalHidden} />
			) : null}
		</PlanningPageBlock>
	);

};

PlanningPage.propTypes = {};

export default PlanningPage;
