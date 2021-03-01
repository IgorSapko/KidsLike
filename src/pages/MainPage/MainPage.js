//Core
import React from 'react';
import WeekTabs from './WeekTabs';
import WeekTabsContent from './WeekTabContent';
// import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { MainPage_container } from './MainPage.styled';

// import { NavLink, useLocation } from 'react-router-dom';
// import routes from '../router/routes';
// import PropTypes from 'prop-types';
// //Components
// //Тимчасово добавлю сюди так як немає навігації
// import CardList from '../components/Commons/CardList/CardList';
// import DaysList from '../components/Commons/SelectDays/SelectDays';

// const MainPage = () => {
// 	return (
// 		<>
// 			<NavLink to="/planning">
// 				<p>PlanningPage</p>
// 			</NavLink>
// 			<div className="mainBackgroundColor2">
// 				MainPage
// 				<CardList />
// 				<DaysList />
// 			</div>
// 		</>
// 	);
// };

// MainPage.propTypes = {};

function MainPage() {
	const week = useSelector(state => state.week);
	return (
		<>
			<MainPage_container>
				<WeekTabs week={week} />
				<WeekTabsContent week={week} />
			</MainPage_container>
			{/* <Footer /> */}
		</>
	);
}

export default MainPage;
