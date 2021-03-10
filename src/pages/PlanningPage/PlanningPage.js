import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/Commons/CardList/CardList';
import AddCustomTask from '../../components/Commons/AddCustomTask/AddCustomTask';
import NewTaskModal from '../../components/Commons/NewTaskModal/NewTaskModal';
import PlanningPoints from '../../components/Commons/PlanningPoints/PlanningPoints';
import CurrentWeek from '../../components/Commons/CurrentWeek/CurrentWeek';
import { PlanningPageBlock, PlanningPageInfo } from './planningPage.styles';
import weekOperations from '../../redux/week/weekOperation';

const PlanningPage = () => {
	const startWeekDay = useSelector(state => state.week.startWeekDate);
	const endWeekDay = useSelector(state => state.week.endWeekDate);
	const points = useSelector(state => state.week.pointsPlanned);
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

	const currentWeek = () => {
		const endDay = endWeekDay.replace(/-/gi, '.');
		if (startWeekDay.slice(0, 1) === '0') {
			return `${startWeekDay.slice(1, 2)} - ${endDay}`;
		};
		return `${startWeekDay.slice(0, 2)} - ${endDay}`;
	};

	return (
		<PlanningPageBlock>
			<PlanningPageInfo>
				<CurrentWeek week={currentWeek()} />
				<PlanningPoints points={points} />
				<AddCustomTask swowModal={modalVisible} />
			</PlanningPageInfo>
			<CardList />
			{openAddTaskModal === true ? (
				<NewTaskModal addTask={createCustomTask} closeModal={modalHidden} />
			) : null}
		</PlanningPageBlock>
	);
};

export default PlanningPage;


