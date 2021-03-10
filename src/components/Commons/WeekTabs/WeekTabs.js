import React from 'react';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import { WeekTabsContainer, WeekTabsWeekInfo } from '../../../pages/MainPage/MainPage.styles';
import { monthInNumbFunc } from 'utils/Helpers';

export default function WeekTabs({ week }) {
	return (
		<>
			<div>
				<WeekTabsContainer>
					<WeekTabsWeekInfo>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}{' '}
						{monthInNumbFunc(week).name}
					</WeekTabsWeekInfo>
					<CurrentWeekRange />
				</WeekTabsContainer>
			</div>
		</>
	);
}