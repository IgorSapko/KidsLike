import React from 'react';
import { useLocation } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';
import {
	LeftSide,
	ProgressDiv,
	Container,
	Points,
	WeekText,
	DayName,
	PlanPoints,
	ProgressContainer,
	ContainerPoints,
	BoldPoints,
} from './currentDay.styles';
import { useSelector } from 'react-redux';

function CurrentDay({ thisday }) {
	const location = useLocation();
	const currentDay = thisday;

	function getDayName(dateStr, locale) {
		const date = new Date(
			`${dateStr?.slice(8, 10)}-${dateStr?.slice(5, 7)}-${dateStr?.slice(11, 14)}`,
		);

		return date?.toLocaleDateString(locale, { weekday: 'long' });
	}

	const dayName = getDayName(location.search, 'ru-RU').toLocaleUpperCase();

	const weekPoints = useSelector(state => state.week.pointsGained);
	const plan = useSelector(state => state.week.pointsPlanned);
	const dayStart = useSelector(state => state.week.startWeekDate).slice(0, 2);
	const dayEnd = useSelector(state => state.week.endWeekDate).slice(0, 2);

	function progress(points, planned) {
		return (parseInt(points) / parseInt(planned)) * 100;
	}

	const month = useSelector(state => state.week.startWeekDate).slice(3, 5);

	let monthName = '';

	switch (month) {
		case '01':
			monthName = 'Января';
			break;
		case '02':
			monthName = 'Февраля';
			break;
		case '03':
			monthName = 'Марта';
			break;
		case '04':
			monthName = 'Апреля';
			break;
		case '05':
			monthName = 'Мая';
			break;
		case '06':
			monthName = 'Июня';
			break;
		case '07':
			monthName = 'Июля';
			break;
		case '08':
			monthName = 'Августа';
			break;
		case '09':
			monthName = 'Сентября';
			break;
		case '10':
			monthName = 'Октября';
			break;
		case '11':
			monthName = 'Ноября';
			break;
		case '12':
			monthName = 'Декабря';
			break;

		default:
			monthName = 'Числа';
	}

	return (
		<div>
			<Container>
				<LeftSide>
					<WeekText>
						Неделя: {dayStart} - {dayEnd} {monthName}
					</WeekText>
					<Points>
						Мoи задачи:{' '}
						<DayName>
							{' '}
							{dayName}, {currentDay}
						</DayName>
					</Points>
				</LeftSide>

				<ContainerPoints>
					<Points>
						Заработано баллов за эту неделю:<BoldPoints>{weekPoints}</BoldPoints>
					</Points>
					<Points>
						Запланировано баллов на эту неделю:<BoldPoints>{plan}</BoldPoints>
					</Points>
					<ProgressContainer>
						<BoldPoints>{weekPoints}</BoldPoints>/ <PlanPoints>{plan}</PlanPoints>
						<ProgressDiv>
							{
								<ProgressBar
									completed={progress(weekPoints, plan)}
									bgcolor="#9ECB44"
									width="280px"
									height="6px"
									borderRadius="10px"
									labelSize="0"
								/>
							}
						</ProgressDiv>
					</ProgressContainer>
				</ContainerPoints>
			</Container>
		</div>
	);
}

export default CurrentDay;
