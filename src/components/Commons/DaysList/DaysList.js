import React, { useEffect, useState } from 'react';
//svg

//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

export default function DaysList({ item, getCheckedTasks }) {
	const [arrDays, setArrDays] = useState([]);
	console.log('arrDays', arrDays);
	useEffect(() => {
		getCheckedTasks(arrDays);
	}, [arrDays]);


	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

	const handleInputChange = (e, item, day) => {
		const isChecked = e.target.checked;
		// console.log('item event', item)
		if (isChecked) {
			setArrDays([...arrDays, day]);
		} else {
			setArrDays([...arrDays.filter(uncheckedDay => uncheckedDay !== day)]);
		}
	};

	return (
		<div>
			<BlockCheckbox>
				{days.map((day, ind) => {
					return (
						<BlockLabel key={day}>
							<BlockInput
								onChange={e => handleInputChange(e, item, day)}
								type="checkbox"
								id={day}
							/>
							{day}
						</BlockLabel>
					);
				})}
			</BlockCheckbox>
		</div>
	);
}
