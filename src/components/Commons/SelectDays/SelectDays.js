import { useState } from 'react';

import {
	BlockPeopleTask,
	BlockPeopleTask_item,
	BlockPeopleTask_img,
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_inform_pad,
	BlockPeopleTask_item_inform_title,
	BlockPeopleTask_item_text,
} from './SelectDays.styles';

import itemBlock from './item.json';
import DaysList from '../DaysList/DaysList';

export default function Stateless() {
	const [numberSelect, setNumberSelect] = useState('0');

	const summNumber = name => {
		setNumberSelect(prev => Number(prev) + name);
	};
	console.log('result summ number ', numberSelect);

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

								<DaysList summNumber={summNumber} itemball={item.ball} />
							</BlockPeopleTask_item_inform>
						</BlockPeopleTask_item_text>
					</BlockPeopleTask_item>
				);
			})}
		</BlockPeopleTask>
	);
}
