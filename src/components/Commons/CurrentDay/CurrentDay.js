import React from 'react';
// import ProgressBar from '@ramonak/react-progress-bar';
import ProgressBarComponent from '../ProgressBar/ProgressBar';
import { LeftSide, Container, Points, WeekText, WeekPointsSpan, PointsContainer, PointsContainerWrapper } from './currentDay.styles';
import { useSelector } from 'react-redux';
import { monthInNumbFunc } from '../../../utils/Helpers';
import { useHistory } from 'react-router-dom';

function CurrentDay({ thisDay, choosenDay }) {
	let history = useHistory();
	const currentDay = thisDay;
	const weekPoints = useSelector(state => state.week.pointsGained);
	const plan = useSelector(state => state.week.pointsPlanned);
	const dayStart = useSelector(state => state.week.startWeekDate).slice(0, 2);
	const dayEnd = useSelector(state => state.week.endWeekDate).slice(0, 2);
	const week = useSelector(state => state.week);

	function progress(points, planned) {
		return (parseInt(points) / parseInt(planned)) * 100;
	}

	return (
		
			<Container>
				{history.location.pathname !== '/awards'
			? <LeftSide>
				<WeekText>
					Неделя: {dayStart} - {dayEnd} {monthInNumbFunc(week).name}
				</WeekText>
				<Points>
					Мoи задачи: <WeekPointsSpan>{choosenDay}, {currentDay}</WeekPointsSpan>
				</Points>
			</LeftSide>:null
				}
				

				<PointsContainerWrapper>
					<PointsContainer>
					<Points>Заработано баллов за эту неделю:<WeekPointsSpan>{weekPoints}</WeekPointsSpan></Points>
					<Points>Запланировано баллов на эту неделю:<WeekPointsSpan>{plan}</WeekPointsSpan></Points>
					</PointsContainer>
					<p>
						{weekPoints}/{plan}
					</p>
					<ProgressBarComponent progress={progress} weekPoints={weekPoints} plan={plan} />
				</PointsContainerWrapper>
			</Container>
		
	);
}

export default CurrentDay;
