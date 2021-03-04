//Core
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from '../components/Commons/CardList/CardList'
//Components

const PlanningPage = () => {
	const startWeekDay = useSelector(state => state.week.startWeekDate);
	
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

	return (
	<CardList currentDay={currentDay}/>
	);
};

PlanningPage.propTypes = {};

export default PlanningPage;
