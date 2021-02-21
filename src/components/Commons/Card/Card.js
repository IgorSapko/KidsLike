//styles
import { BlockPeopleTask_item } from './Card.modules';

import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Stateless({ item }) {
	return (
		<BlockPeopleTask_item key={item.img}>
			<CardBody item={item} />
			<CardFooter item={item} />
		</BlockPeopleTask_item>
	);
}
