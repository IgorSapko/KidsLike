import { BlockPeopleTask_item_img } from './CardBody.styles';

export default function CardBody({ item }) {
	return (
		<BlockPeopleTask_item_img>
			<img src={item.imageUrl} />
		</BlockPeopleTask_item_img>
	);
}
