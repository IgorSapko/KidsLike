//styles
import { BlockPeopleTask_item_inform, BlockPeopleTask_item_text } from './CardFooter.module.js';
import CardTitle from '../CardTitle/CardTitle';
import PointAmount from '../PointAmount/PointAmount';
//toggle buttom
import TaskToggle from '../TaskToggle/TaskToggle';

export default function CardFooter({ item }) {
	return (
		<BlockPeopleTask_item_text>
			<CardTitle item={item} />
			<BlockPeopleTask_item_inform>
				<PointAmount item={item} />
				<TaskToggle />
			</BlockPeopleTask_item_inform>
		</BlockPeopleTask_item_text>
	);
}
