// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import ProgressBar from '@ramonak/react-progress-bar';
// import {
// 	LeftSide,
// 	ProgressDiv,
// 	Container,
// 	Points,
// 	PointsLeft,
// 	WeekText,
// 	DayName,
// 	PlanPoints,
// 	ProgressContainer,
// 	ContainerPoints,
// 	BoldPoints,
// } from './currentDay.styles';
// import { useSelector } from 'react-redux';
// import { monthInNumbFunc } from '../../../utils/Helpers';

// function CurrentDay({ thisday, choosenDay }) {
// 	const location = useLocation();
// 	const currentDay = thisday;
// 	console.log('thisday', thisday)
// 	const week = useSelector(state => state.week);

// 	function getDayName(dateStr, locale) {
// 		const date = new Date(
// 			`${dateStr?.slice(8, 10)}-${dateStr?.slice(5, 7)}-${dateStr?.slice(11, 14)}`,
// 		);

// 		return date?.toLocaleDateString(locale, { weekday: 'long' });
// 	}

// 	const dayName = getDayName(location.search, 'ru-RU').toLocaleUpperCase();

// 	const weekPoints = useSelector(state => state.week.pointsGained);
// 	const plan = useSelector(state => state.week.pointsPlanned);
// 	const dayStart = useSelector(state => state.week.startWeekDate).slice(0, 2);
// 	const dayEnd = useSelector(state => state.week.endWeekDate).slice(0, 2);

// 	function progress(points, planned) {
// 		return (parseInt(points) / parseInt(planned)) * 100;
// 	}

// 	const month = useSelector(state => state.week.startWeekDate).slice(3, 5);

// 	let monthName = '';

// 	switch (month) {
// 		case '01':
// 			monthName = 'Января';
// 			break;
// 		case '02':
// 			monthName = 'Февраля';
// 			break;
// 		case '03':
// 			monthName = 'Марта';
// 			break;
// 		case '04':
// 			monthName = 'Апреля';
// 			break;
// 		case '05':
// 			monthName = 'Мая';
// 			break;
// 		case '06':
// 			monthName = 'Июня';
// 			break;
// 		case '07':
// 			monthName = 'Июля';
// 			break;
// 		case '08':
// 			monthName = 'Августа';
// 			break;
// 		case '09':
// 			monthName = 'Сентября';
// 			break;
// 		case '10':
// 			monthName = 'Октября';
// 			break;
// 		case '11':
// 			monthName = 'Ноября';
// 			break;
// 		case '12':
// 			monthName = 'Декабря';
// 			break;

// 		default:
// 			monthName = 'Числа';
// 	}
// console.log('currentDay', currentDay)
// 	return (
// 		<div>
// 			<Container>
// 				<LeftSide>
// 					<WeekText>
// 						{' '}
// 						Неделя: {dayStart} - {dayEnd} {monthInNumbFunc(week).name}
// 					</WeekText>
// 					<PointsLeft>
// 						Мoи задачи:{' '}
// 						<DayName>
// 							{' '}
// 							{dayName}, {currentDay}
// 						</DayName>
// 					</PointsLeft>
// 				</LeftSide>

// 				<ContainerPoints>
// 					<Points>
// 						Заработано баллов за эту неделю:<BoldPoints>{weekPoints}</BoldPoints>
// 					</Points>
// 					<Points>
// 						Запланировано баллов на эту неделю:<BoldPoints>{plan}</BoldPoints>
// 					</Points>
// 					<ProgressContainer>
// 						<BoldPoints>{weekPoints}</BoldPoints>/ <PlanPoints>{plan}</PlanPoints>
// 						<ProgressDiv>
// 							{
// 								<ProgressBar
// 									completed={progress(weekPoints, plan)}
// 									bgcolor="#9ECB44"
// 									width="280px"
// 									height="6px"
// 									borderRadius="10px"
// 									labelSize="0"
// 								/>
// 							}
// 						</ProgressDiv>
// 					</ProgressContainer>
// 				</ContainerPoints>
// 			</Container>
// 		</div>
// 	);
// }

// export default CurrentDay;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';
import {
	LeftSide,
	ProgressDiv,
	Container,
	Points,
	PointsLeft,
	WeekText,
	DayName,
	PlanPoints,
	ProgressContainer,
	ContainerPoints,
	BoldPoints,
	PointsMobile,
	AddCustom,
	AddBtn,
} from './currentDay.styles';
import { monthInNumbFunc } from '../../../utils/Helpers';
import AddCustomTask from '../AddCustomTask/AddCustomTask';
import NewTaskModal from '../NewTaskModal/NewTaskModal';
import weekOperations from '../../../redux/week/weekOperation';
import yellowPlusSvg from '../../../img/yellowPlus.svg';

function CurrentDay({ thisday, choosenDay, awardsPage, menuHeight }) {
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
	const dispatch = useDispatch();
	const modalVisible = () => {
		setOpenAddTaskModal(true);
	};

	const modalHidden = () => {
		setOpenAddTaskModal(false);
	};

	const createCustomTask = formData => {
		dispatch(weekOperations.createCustomTask(formData));
		setOpenAddTaskModal(false);
	};

	const location = useLocation();
	const currentDay = thisday;
	const week = useSelector(state => state.week);

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
	console.log('currentDay', currentDay);
	return (
		<div>
			<Container>
				<LeftSide awardsPage={awardsPage}>
					<WeekText>
						{' '}
						Неделя: {dayStart} - {dayEnd} {monthInNumbFunc(week).name}
					</WeekText>
					<PointsLeft awardsPage={awardsPage}>
						Мoи задачи:{' '}
						<DayName>
							{' '}
							{dayName}, {currentDay}
						</DayName>
					</PointsLeft>
				</LeftSide>

				<ContainerPoints awardsPage={awardsPage}>
					<Points>
						Заработано баллов за эту неделю:<BoldPoints>{weekPoints}</BoldPoints>
					</Points>
					<Points>
						Запланировано баллов на эту неделю:<BoldPoints>{plan}</BoldPoints>
					</Points>
					<ProgressContainer menuHeight={menuHeight} awardsPage={awardsPage}>
						<PointsMobile>Заработано баллов</PointsMobile>
						<BoldPoints>{weekPoints}</BoldPoints>/ <PlanPoints>{plan}</PlanPoints>
						<ProgressDiv>
							{
								<ProgressBar
									completed={progress(weekPoints, plan)}
									bgcolor="#9ECB44"
									width="100%"
									height="6px"
									borderRadius="10px"
									labelSize="0"
								/>
							}
						</ProgressDiv>
					</ProgressContainer>
				</ContainerPoints>
				<AddCustom >
					<AddBtn menuHeight={menuHeight}
						onClick={() => {
							modalVisible();
						}}
					>
						<img height="54" width="54" src={yellowPlusSvg} alt="Add task"></img>
					</AddBtn>
				</AddCustom>
				{openAddTaskModal === true ? (
					<NewTaskModal addTask={createCustomTask} closeModal={modalHidden} />
				) : null}
			</Container>
		</div>
	);
}

export default CurrentDay;
