import React from 'react';
import { useSelector } from 'react-redux';
import weekSelector from '../../../redux/week/weekSelectors';

//styles
import { BlockPeopleTask } from './CardList.module';
import Card from '../Card/Card';

function CardList({ currentDay }) {
	currentDay = 1;
	const tasks = useSelector(weekSelector.getTasks);

	return (
		<BlockPeopleTask>
			{tasks.map(task => {
				if (task.days[currentDay].isActive === true) {
					return <Card key={task.title} item={task} />;
				}
			})}
			)
		</BlockPeopleTask>
	);
}

export default CardList;
