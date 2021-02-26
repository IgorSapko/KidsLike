import React from 'react';
import { connect } from 'react-redux';
//styles
import { BlockPeopleTask, BlockPeopleList } from './CardList.module';
import Card from '../Card/Card';

function CardList({ itemTask }) {
	return (
		<BlockPeopleTask>
			<BlockPeopleList>
				{[...itemTask].splice(0, 6).map(item => {
					return <Card key={item._id} item={item}  />;
				})}
			</BlockPeopleList>
		</BlockPeopleTask>
	);
}

const mapStateToProps = state => ({
	itemTask: state.auth.user.week.tasks,
});

export default connect(mapStateToProps, null)(CardList);
