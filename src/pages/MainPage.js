//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
import Card from '../components/Commons/Card/Card';
import DaysList from '../components/Commons/DaysList/DaysList';

const MainPage = () => {
	return (
		<div className="mainBackgroundColor2">
			MainPage
			<Card />
			<DaysList />
		</div>
	);
};

MainPage.propTypes = {};

export default MainPage;
