//Core
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../router/routes';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
import CardList from '../components/Commons/CardList/CardList';
import DaysList from '../components/Commons/SelectDays/SelectDays';

const MainPage = () => {
	const startWeekDay = useSelector(state=>state.week.startWeekDate)
	const [currentDay, setcurrentDay] = useState(startWeekDay)
	return (
		<>
		<NavLink to="/planning">
				<p>PlanningPage</p>
			</NavLink>

			
		<div className="mainBackgroundColor2">
			MainPage
			<CardList currentDay={currentDay}/>
			<DaysList />
			
		</div>
		</>
	);
};

MainPage.propTypes = {};

export default MainPage;
