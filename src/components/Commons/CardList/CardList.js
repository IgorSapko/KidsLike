//styles
import { BlockPeopleTask } from './CardList.module';
import Card from '../Card/Card';

//json file
import itemBlock from './item.json';

export default function CardList() {
	return (
		<BlockPeopleTask>
			{itemBlock.map(item => {
				return <Card item={item} />;
			})}
		</BlockPeopleTask>
	);
}
