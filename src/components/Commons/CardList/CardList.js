import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import selector from '../../../redux/selectors';
import Card from '../Card/Card';
import { BlockPeopleTask } from './CardList.styles';
import styles from '../../../pages/MainPage/Helper.module.css';
import { todayTasks } from 'utils/Helpers';

function CardList({ currentDay, today }) {
	const tasks = useSelector(selector.getTasks);
	let history = useHistory();

	return (
		<BlockPeopleTask>
			{history.location.pathname === '/'
				? tasks.map(task => {
						if (task.days.find(day => day.date === currentDay).isActive === true) {
							return <Card key={task.title} item={task} currentDay={currentDay} today={today}/>;
						}
				  })
				: tasks.map(task => <Card key={task.title} item={task} currentDay={currentDay} today={today}/>)}
		</BlockPeopleTask>
	);
}

// return (
// 	<ul
// 		className={
// 			todayTasks(tasks).length > 0
// 				? `${styles.WeekTabContent_list}`
// 				: `${styles.WeekTabContent_none}`
// 		}
// 	>
// 		{history?.location?.pathname === '/'
// 			? tasks.map(task => {
// 					if (task.days.find(day => day.date === currentDay).isActive === true) {
// 						return <Card key={task.title} item={task} currentDay={currentDay} today={today} />;
// 					}
// 			  })
// 			: tasks.map(task => (
// 					<Card key={task.title} item={task} currentDay={currentDay} today={today} />
// 			  ))}
// 	</ul>
// );
// }

export default CardList;
