//styles
import { BlockPeopleTask_item_img } from './CardBody.module';

export default function CardBody({ item }) {
	return (
		<BlockPeopleTask_item_img>
			<img src={item.img} />
		</BlockPeopleTask_item_img>
	);
}
