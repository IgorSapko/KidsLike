import { BlockPeopleTask_item } from './Card.module';

import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Stateless({ item,summNumber }) {
	return (
		<BlockPeopleTask_item key={item._id}>
			<CardBody item={item} />
			<CardFooter summNumber={summNumber} item={item} />
		</BlockPeopleTask_item>
	);
}