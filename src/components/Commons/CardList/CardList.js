import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import selector from '../../../redux/selectors';
import Card from '../Card/Card';
import { BlockPeopleTask } from './CardList.styles';

function CardList({ currentDay }) {
	const tasks = useSelector(selector.getTasks);
	let history = useHistory();

	return (
		<BlockPeopleTask>
			{history.location.pathname === '/'
				? tasks.map(task => {
						if (task.days.find(day => day.date === currentDay).isActive === true) {
							return <Card key={task.title} item={task} currentDay={currentDay} />;
						}
				  })
				: tasks.map(task => <Card key={task.title} item={task} currentDay={currentDay} />)}
			)
		</BlockPeopleTask>
	);
}

export default CardList;
