//styles
import { BlockPeopleTask_item } from './Card.modules';

import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Card({ item, currentDay }) {
	return (
<<<<<<< HEAD
		<BlockPeopleTask_item >
=======
		<BlockPeopleTask_item key={item.imageUrl}>
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
			<CardBody item={item} />
			<CardFooter item={item} currentDay={currentDay} />
		</BlockPeopleTask_item>
	);
}
