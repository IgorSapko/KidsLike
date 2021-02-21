//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
import CardList from '../components/Commons/CardList/CardList';
import DaysList from '../components/Commons/SelectDays/SelectDays';

const MainPage = () => {
	return (
		<div className="mainBackgroundColor2">
			MainPage
			<CardList />
			<DaysList />
		</div>
	);
};

MainPage.propTypes = {};

export default MainPage;
