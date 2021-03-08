import React from 'react';
import { WeekBlock, TextLabel, WeekLabel } from './currentWeek.styles';

const CurrentWeek = ({ week }) => {
	return (
		<WeekBlock>
			<TextLabel>План на неделю:</TextLabel>
			<WeekLabel>{week}</WeekLabel>
		</WeekBlock>
	);
};

export default CurrentWeek;
