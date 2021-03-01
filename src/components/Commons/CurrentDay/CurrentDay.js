import React from 'react';
// import ProgressBar from '@ramonak/react-progress-bar';
import { LeftSide, ProgressDiv, Container, Points, WeekText } from './currentDay.styles';
import CardList from '../CardList/CardList';

function CurrentDay({ dayStart, dayEnd, month, dayCurrent, weekPoints, plan }) {
	const progress = (parseInt(weekPoints) / parseInt(plan)) * 100;
	return (
		<div>
			<Container>
				<LeftSide>
					<WeekText>
						Неделя {dayStart} - {dayEnd} {month}
					</WeekText>
					<Points>Мoи задачи: {dayCurrent}</Points>
				</LeftSide>

				<div>
					<Points>Заработано баллов за эту неделю:{weekPoints}</Points>
					<Points>Запланировано баллов на эту неделю:{plan}</Points>
					<p>
						{weekPoints}/{plan}
					</p>
					<ProgressDiv>
						{/* <ProgressBar
						completed={progress}
						bgcolor="#9ECB44"
						width="280px"
						height="6px"
						borderRadius="10px"
						labelSize="0"
					/> */}
					</ProgressDiv>
				</div>
			</Container>
			<CardList />
		</div>
	);
}

export default CurrentDay;
