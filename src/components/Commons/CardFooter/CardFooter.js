import { useHistory } from 'react-router-dom';
import CardTitle from '../CardTitle/CardTitle';
import PointAmount from '../PointAmount/PointAmount';
import TaskToggle from '../TaskToggle/TaskToggle';
import SelectDays from '../SelectDays/SelectDays';
import {
	BlockPeopleTaskItemInform,
	BlockPeopleTaskItemText,
	DoneTask,
	NotDoneTask,
} from './CardFooter.styles.js';

export default function CardFooter({ item, currentDay, today, summNumber, dayPositionInWeekFromZero }) {
	let history = useHistory();
	
	return (
		<BlockPeopleTaskItemText>
			<CardTitle item={item} />
			<BlockPeopleTaskItemInform>
				<PointAmount item={item} />
				{history.location.pathname === '/' && currentDay && today ? (
					currentDay === today ? (
						<TaskToggle item={item} currentDay={currentDay} />
					) :  currentDay > today ? null : item.days[dayPositionInWeekFromZero].isCompleted ? (
						<DoneTask />
					) : (
						<NotDoneTask />
					)
				) : history.location.pathname === '/awards' ? (
					<TaskToggle item={item} currentDay={currentDay} summNumber={summNumber} />
				) : (
					<SelectDays item={item} />
				)}
			</BlockPeopleTaskItemInform>
		</BlockPeopleTaskItemText>
	);
}
