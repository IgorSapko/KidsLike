import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { LeftSide, ProgressDiv, Container, Points, WeekText } from './currentDay.styles';
import { useSelector } from 'react-redux';

function CurrentDay({ thisDay, choosenDay }) {
	const currentDay = thisDay;
	// const date = new Date(currentDay.slice(7, 10), currentDay.slice(3, 5), currentDay.slice(0, 2));
	// console.log('date', date);

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
						Мoи задачи: {choosenDay}, {currentDay}
					</Points>
				</LeftSide>

				<div>
					<Points>Заработано баллов за эту неделю:{weekPoints}</Points>
					<Points>Запланировано баллов на эту неделю:{plan}</Points>
					<p>
						{weekPoints}/{plan}
					</p>
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
				</div>
			</Container>
		</div>
	);
}

export default CurrentDay;
