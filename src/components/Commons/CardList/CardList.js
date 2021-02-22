import React, { useState, useEffect } from 'react';

//styles
import { BlockPeopleTask } from './CardList.module';
import Card from '../Card/Card';

//json file
import itemBlock from './item.json';

export default function CardList() {
	const [numberSelect, setNumberSelect] = useState('0');

	const summNumber = (number, switcher) => {
		console.log('switch', switcher);

		const switcherNumber = switcher
			? setNumberSelect(prev => {
					return Number(prev) + Number(parseInt(number));
			  })
			: setNumberSelect(prev => {
					return Number(prev) - Number(parseInt(number));
			  });
		return switcherNumber;
	};

	console.log(numberSelect);

	return (
		<BlockPeopleTask>
			{itemBlock.map(item => {
				return <Card summNumber={summNumber} item={item} />;
			})}
		</BlockPeopleTask>
	);
}
