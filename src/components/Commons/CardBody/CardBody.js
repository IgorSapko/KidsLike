//styles
import { BlockPeopleTask_item_img, TaskImg } from './CardBody.styles';

export default function CardBody({ item }) {
	return (
		<BlockPeopleTask_item_img>
			<TaskImg src={item.imageUrl} />
		</BlockPeopleTask_item_img>
	);
}
