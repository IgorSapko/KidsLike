import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WeekTabs from '../../components/Commons/WeekTabs/WeekTabs';
import WeekTabsContent from '../../components/Commons/WeekTabContent/WeekTabContent';

import { MainPage_container } from './MainPage.styled';

function MainPage() {
	const week = useSelector(state => state.week);

	const today = DateTime.local().toFormat('dd-MM-yyyy');
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
		</>
	);
}

export default MainPage;
