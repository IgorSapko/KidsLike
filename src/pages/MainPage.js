//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
//Тимчасово добавлю сюди так як немає навігації
// import CardList from '../components/Commons/CardList/CardList';
// import DaysList from '../components/Commons/SelectDays/SelectDays';

import ModalBackDrop from '../components/Commons/ModalBackDrop/ModalBackDrop'

const MainPage = () => {
	return (
		<div >
		
			{/* <CardList />
			<DaysList /> */}
			<ModalBackDrop/>
		</div>
	);
};

MainPage.propTypes = {};

export default MainPage;
