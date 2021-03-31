import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WeekTabs from '../../components/Commons/WeekTabs/WeekTabs';
import WeekTabsContent from '../../components/Commons/WeekTabContent/WeekTabContent';
import { MainPageContainer } from './MainPage.styles';
import { todayIs, nameOfdays } from 'utils/Helpers';

function MainPage() {
	const week = useSelector(state => state.week);
	const history = useHistory();
	const [dayPositionInWeekFromZero, setDayPositionInWeekFromZero] = useState(null);

	useEffect(() => {
		history.push(todayIs());
	}, []);

	const mainPageGetCurrentDay = currentDay => {
		nameOfdays.find((day, index) => {
			if (day.full === currentDay || day.short === currentDay) {
				setDayPositionInWeekFromZero(index);
			}
		});
	};
	
	return (
		<>
			<MainPageContainer>
				<WeekTabs week={week} mainPageGetCurrentDay={mainPageGetCurrentDay} />
				<WeekTabsContent week={week} dayPositionInWeekFromZero={dayPositionInWeekFromZero} />
			</MainPageContainer>
		</>
	);
}

export default MainPage;
