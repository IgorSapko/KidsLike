import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import { BlockPeopleTaskItem } from './Card.styles';

export default function Card({ item, today, currentDay, summNumber, dayPositionInWeekFromZero }) {
	return (
		<BlockPeopleTaskItem key={item.imageUrl}>
			<CardBody item={item} />
			<CardFooter
				item={item}
				currentDay={currentDay}
				today={today}
				summNumber={summNumber}
				dayPositionInWeekFromZero={dayPositionInWeekFromZero}
			/>
		</BlockPeopleTaskItem>
	);
}
