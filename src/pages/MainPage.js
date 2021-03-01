//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
import CardList from '../components/Commons/CardList/CardList';
import DaysList from '../components/Commons/SelectDays/SelectDays';
import CurrentDay from '../components/Commons/CurrentDay/CurrentDay';

const MainPage = () => {
	return (
		<div className="mainBackgroundColor2">
			MainPage
			<CurrentDay />
			<DaysList />
		</div>
	);
};

MainPage.propTypes = {};

export default MainPage;
