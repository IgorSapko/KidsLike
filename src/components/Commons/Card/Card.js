//styles
import { BlockPeopleTask_item } from './Card.modules';

import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Stateless({ item, summNumber }) {
	return (
		<BlockPeopleTask_item >
			<CardBody item={item} />
			<CardFooter summNumber={summNumber} item={item} />
		</BlockPeopleTask_item>
	);
}
