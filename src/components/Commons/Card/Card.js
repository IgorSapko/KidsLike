//styles
import { BlockPeopleTask_item } from './Card.modules';

import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Card({ item,  today, currentDay, summNumber }) {
	return (
		<BlockPeopleTask_item key={item.imageUrl}>
			<CardBody item={item} />
			<CardFooter item={item} currentDay={currentDay} today={today} summNumber={summNumber}/>
		</BlockPeopleTask_item>
	);
}
