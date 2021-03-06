import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import weekSelector from '../../../redux/week/weekSelectors';

//styles
import { BlockPeopleTask } from './CardList.module';
import Card from '../Card/Card';

function CardList({ currentDay }) {
	const tasks = useSelector(weekSelector.getTasks);
	let history = useHistory();

	return (
		<BlockPeopleTask>
			{history.location.pathname === '/'
				? tasks.map(task => {
						if (task.days.find(day => day.date === currentDay).isActive === true) {
							return <Card key={task.title} item={task} currentDay={currentDay} />;
						}
				  })
				: ( tasks.map(task => <Card key={task.title} item={task} currentDay={currentDay} />))}
			)
		</BlockPeopleTask>
	);
}

export default CardList;
