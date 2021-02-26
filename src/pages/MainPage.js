//Core
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../router/routes';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
import CardList from '../components/Commons/CardList/CardList';
import DaysList from '../components/Commons/SelectDays/SelectDays';

const MainPage = () => {
	return (
		<>
		<NavLink to="/planning">
				<p>PlanningPage</p>
			</NavLink>
		<div className="mainBackgroundColor2">
			MainPage
			<CardList />
			<DaysList />
			
		</div>
		</>
	);
};

MainPage.propTypes = {};

export default MainPage;
