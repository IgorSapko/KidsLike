import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WeekTabs from '../../components/Commons/WeekTabs/WeekTabs';
import WeekTabsContent from '../../components/Commons/WeekTabContent/WeekTabContent';
import Navigation from '../../components/Commons/Navigation/Navigation'
import Header from '../../components/Commons/Header/Header'

import { MainPage_container } from './MainPage.styled';

function MainPage() {
	const week = useSelector(state => state.week);
	const today = dayjs().format('DD-MM-YYYY');
	const history = useHistory();
	useEffect(() => {
		history.push(`?day=${today}`);
	}, []);
	return (
		<>
<Navigation/>

			<MainPage_container>
				<WeekTabs week={week} />
				<WeekTabsContent week={week} />
			</MainPage_container>
			{/* <Footer /> */}
		</>
	);
}

export default MainPage;
