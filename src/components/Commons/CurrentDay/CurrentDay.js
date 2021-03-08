import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { LeftSide, ProgressDiv, Container, Points, WeekText } from './currentDay.styles';
import { useSelector } from 'react-redux';
import { monthInNumbFunc } from '../../../utils/Helpers';

function CurrentDay({ thisDay, choosenDay }) {
	const currentDay = thisDay;
	const weekPoints = useSelector(state => state.week.pointsGained);
	const plan = useSelector(state => state.week.pointsPlanned);
	const dayStart = useSelector(state => state.week.startWeekDate).slice(0, 2);
	const dayEnd = useSelector(state => state.week.endWeekDate).slice(0, 2);
	const week = useSelector(state => state.week);

	function progress(points, planned) {
		return (parseInt(points) / parseInt(planned)) * 100;
	};

	return (
		<div>
			<Container>
				<LeftSide>
					<WeekText>
						Неделя: {dayStart} - {dayEnd} {monthInNumbFunc(week).name}
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
};

export default CurrentDay;
