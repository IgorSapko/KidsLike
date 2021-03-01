//Core

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import CardList from '../components/Commons/CardList/CardList'
//Components

import planningSelector from '../redux/planning/planningSelectors';
const PlanningPage = () => {

	const startWeekDay = useSelector(state => state.week.startWeekDate);
	const planning = useSelector(planningSelector.getTasks);
	console.log("Planning", planning)
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

	return (<><div>PlanningPage</div>
	<CardList currentDay={currentDay}/>
	</>);

};

PlanningPage.propTypes = {};

export default PlanningPage;
