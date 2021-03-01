import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WeekTabs from './WeekTabs';
import WeekTabsContent from './WeekTabContent';

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
			<MainPage_container>
				<WeekTabs week={week} />
				<WeekTabsContent week={week} />
			</MainPage_container>
			{/* <Footer /> */}
		</>
	);
}

export default MainPage;
