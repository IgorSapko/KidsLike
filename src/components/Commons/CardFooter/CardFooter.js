import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//styles
import {
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_text,
	DoneTask,
	NotDoneTask,
} from './CardFooter.module.js';
import CardTitle from '../CardTitle/CardTitle';
import PointAmount from '../PointAmount/PointAmount';
//toggle button
import TaskToggle from '../TaskToggle/TaskToggle';
import SelectDays from '../SelectDays/SelectDays';

export default function CardFooter({ item, currentDay, today, summNumber }) {
	const startWeekDay = useSelector(state => state.week.startWeekDate);
	let dayPositionInWeek;
	if (currentDay && today) {
		const startWeekDayDate = startWeekDay.split('-')[0];
		const currentDayDate = currentDay.split('-')[0];
		dayPositionInWeek = Number(currentDayDate) - Number(startWeekDayDate) + 1;
	}
	// console.log('item', item)
	// console.log('dayPositionInWeek', dayPositionInWeek);
	let history = useHistory();
	// console.log('currentDay', currentDay);
	// console.log('today', today);
	// console.log('currentDay>today', currentDay > today);
	// console.log('history.location', history.location)
	return (
		<BlockPeopleTask_item_text>
			<CardTitle item={item} />
			<BlockPeopleTask_item_inform>
				<PointAmount item={item} />
				{history.location.pathname === '/' && currentDay && today ? (
					currentDay === today ? (
						<TaskToggle item={item} currentDay={currentDay} />
					) : currentDay > today ? null : item.days[dayPositionInWeek].isCompleted ? (
						<DoneTask />
					) : (
						<NotDoneTask />
					)
				) : history.location.pathname === '/awards' ? (
					<TaskToggle item={item} currentDay={currentDay} summNumber={summNumber} />
				) : (
					<SelectDays item={item} />
				)}
			</BlockPeopleTask_item_inform>
		</BlockPeopleTask_item_text>
	);
}
