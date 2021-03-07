import React from 'react';
import { monthInNumbFunc } from 'utils/Helpers';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import { WeekTabs_container, WeekTabs_weekInfo } from '../../../pages/MainPage/MainPage.styles';

export default function WeekTabs({ week }) {
	return (
		<>
			<div>
				<WeekTabs_container>
					<WeekTabs_weekInfo>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}{' '}
						{monthInNumbFunc(week).name}
					</WeekTabs_weekInfo>
					<CurrentWeekRange />
				</WeekTabs_container>
			</div>
		</>
	);
}