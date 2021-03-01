import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import weekSelector from '../../../redux/week/weekSelectors';

>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
//styles
import { BlockPeopleTask, BlockPeopleList } from './CardList.module';
import Card from '../Card/Card';

<<<<<<< HEAD
function CardList({ itemTask }) {
	return (
		<BlockPeopleTask>
			<BlockPeopleList>
				{[...itemTask].splice(0, 6).map(item => {
					return <Card key={item._id} item={item}  />;
				})}
			</BlockPeopleList>
=======
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
				: (console.log('tasks', tasks), tasks.map(task => <Card key={task.title} item={task} />))}
			)
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
		</BlockPeopleTask>
	);
}

<<<<<<< HEAD
const mapStateToProps = state => ({
	itemTask: state.auth.user.week.tasks,
});

export default connect(mapStateToProps, null)(CardList);
=======
export default CardList;
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
