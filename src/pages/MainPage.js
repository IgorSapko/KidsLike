//Core
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../router/routes';
import PropTypes from 'prop-types';

import AwardsPage from '../components/Commons/AwardsPage/AwardsPage'
//Components
//Тимчасово добавлю сюди так як немає навігації
import CardList from '../components/Commons/CardList/CardList';
// import DaysList from '../components/Commons/SelectDays/SelectDays';

const MainPage = () => {
	const startWeekDay = useSelector(state => state.week.startWeekDate);
	// const [currentDay, setСurrentDay] = useState(startWeekDay);

	// const changeDateToNextDay=()=>{

	// }
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
		<>
			<NavLink to="/planning">
				<p>PlanningPage</p>
			</NavLink>

			<div className="mainBackgroundColor2">
				MainPage
				<CardList currentDay={currentDay} />
				<AwardsPage />
			
			</div>
		</>
	);
};

MainPage.propTypes = {};

export default MainPage;
