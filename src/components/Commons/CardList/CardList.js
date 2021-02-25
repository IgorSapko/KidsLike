import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import weekActions from '../../../redux/week/weekActions';

//styles
import { BlockPeopleTask } from './CardList.module';
import Card from '../Card/Card';

//json file
import itemBlock from './item.json';

function CardList({ addBall, removeBall, numbers }) {
	const summNumber = (number, switcher) => {
		const persitNumber = Number(parseInt(number));

		const switcherNumber = switcher ? removeBall(persitNumber) : addBall(persitNumber);

		return switcherNumber;
	};
	console.log('Total number', numbers);
	return (
		<BlockPeopleTask>
			{itemBlock.map(item => {
				return <Card summNumber={summNumber} item={item} />;
			})}
		</BlockPeopleTask>
	);
}

const mapStateToProps = state => ({
	numbers: state.week.balance,
});

const mapDispatchToProps = {
	addBall: weekActions.addBallSuccess,
	removeBall: weekActions.removeBallSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
