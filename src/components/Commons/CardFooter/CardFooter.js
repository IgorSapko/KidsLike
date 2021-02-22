//styles
import { BlockPeopleTask_item_inform, BlockPeopleTask_item_text } from './CardFooter.module.js';
import CardTitle from '../CardTitle/CardTitle';
import PointAmount from '../PointAmount/PointAmount';
//toggle buttom
import TaskToggle from '../TaskToggle/TaskToggle';

export default function CardFooter({ summNumber, item }) {
	return (
		<BlockPeopleTask_item_text>
			<CardTitle item={item} />
			<BlockPeopleTask_item_inform>
				<PointAmount item={item} />
				<TaskToggle summNumber={summNumber} item={item} />
			</BlockPeopleTask_item_inform>
		</BlockPeopleTask_item_text>
	);
}
