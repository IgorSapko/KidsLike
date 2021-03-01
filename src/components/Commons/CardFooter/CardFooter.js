import { useHistory } from 'react-router-dom';
//styles
import { BlockPeopleTask_item_inform, BlockPeopleTask_item_text } from './CardFooter.module.js';
import CardTitle from '../CardTitle/CardTitle';
import PointAmount from '../PointAmount/PointAmount';
//toggle buttom
import TaskToggle from '../TaskToggle/TaskToggle';
import SelectDays from '../SelectDays/SelectDays';

export default function CardFooter({ item, currentDay }) {
	let history = useHistory();

	return (
		<BlockPeopleTask_item_text>
			<CardTitle item={item} />
			<BlockPeopleTask_item_inform>
				<PointAmount item={item} />
				{history.location.pathname === '/' ? (
					<TaskToggle item={item} currentDay={currentDay} />
				) : (
					<SelectDays item={item} />
				)}
			</BlockPeopleTask_item_inform>
		</BlockPeopleTask_item_text>
	);
}
