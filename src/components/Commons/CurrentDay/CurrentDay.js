import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { LeftSide, ProgressDiv, Container, Points, WeekText } from './currentDay.styles';
import CardList from '../CardList/CardList';
import { useSelector } from 'react-redux';

function CurrentDay() {
	const weekPoints = useSelector(state => state.week.pointsGained);
	const plan = useSelector(state => state.week.pointsPlanned);
	const dayStart = useSelector(state => state.week.startWeekDate);
	const dayEnd = useSelector(state => state.week.endWeekDate);

	const progress = (parseInt(weekPoints) / parseInt(plan)) * 100;
	return (
		<div>
			<Container>
				<LeftSide>
					<WeekText>
						Неделя {dayStart} - {dayEnd} месяц
					</WeekText>
					<Points>Мoи задачи: день</Points>
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
								completed={progress}
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
			<CardList />
		</div>
	);
}

export default CurrentDay;
