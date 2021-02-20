import { useState } from 'react';

import {
	BlockPeopleTask,
	BlockPeopleTask_item,
	BlockPeopleTask_img,
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_inform_pad,
	BlockPeopleTask_item_inform_title,
	BlockPeopleTask_item_text,
} from './DaysList.styles';

import itemBlock from './item.json';
import SelectDays from '../SelectDays/SelectDays';

export default function Stateless() {
	const [numberSelect, setNumberSelect] = useState('0');

	const summNumber = name => {
		const summSelectDay = name.reduce((min, item) => min + Number(parseInt(item.itemball)), 0);

		setNumberSelect(prev => {
			return Number(prev) + summSelectDay;
		});
	};
	console.log(numberSelect);

	return (
		<BlockPeopleTask>
			{itemBlock.map(item => {
				return (
					<BlockPeopleTask_item key={item.img}>
						<BlockPeopleTask_img>
							<img src={item.img} />
						</BlockPeopleTask_img>

						<BlockPeopleTask_item_text>
							<BlockPeopleTask_item_inform_title>{item.title}</BlockPeopleTask_item_inform_title>
							<BlockPeopleTask_item_inform>
								<BlockPeopleTask_item_inform_pad>{item.ball}</BlockPeopleTask_item_inform_pad>

								<SelectDays summNumber={summNumber} itemball={item.ball} />
							</BlockPeopleTask_item_inform>
						</BlockPeopleTask_item_text>
					</BlockPeopleTask_item>
				);
			})}
		</BlockPeopleTask>
	);
}
