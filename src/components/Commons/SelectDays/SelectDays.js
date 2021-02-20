import React, { Fragment, useState } from 'react';
//svg
import PlusSvg from './PlusSvg';
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel } from './SelectDays.styles';

export default function SelectDays({ summNumber, itemball }) {
	const [toggle, serToggle] = useState(false);
	const [listTask, serListTask] = useState([]);
	const days = [
		['ПН', 'Monday'],
		['ВТ', 'Tuesday'],
		['СР', 'Wednesday'],
		['ЧТ', 'Thursday'],
		['ПТ', 'Friday'],
		['СБ', 'Saturday'],
		['ВС', 'Sunday'],
	];

	// console.log(listTask);
	const handlechange = () => {
		serToggle(!toggle);

		if (toggle) {
			summNumber(listTask);
		}
	};

	const handleInputChange = (itemball, item) => {
		serListTask([...listTask, { itemball, item }]);
	};

	return (
		<div>
			{!toggle ? (
				<BlockAddSwitch onClick={handlechange}>
					<PlusSvg />
				</BlockAddSwitch>
			) : (
				<div>
					<BlockAddSwitch onClick={handlechange}>OK</BlockAddSwitch>

					<BlockCheckbox>
						{days.map(item => {
							return (
								<BlockLabel key={item[0]}>
									<input
										type="checkbox"
										id={item[1]}
										onChange={() => handleInputChange(itemball, item[0])}
									/>
									{item[0]}
								</BlockLabel>
							);
						})}
					</BlockCheckbox>
				</div>
			)}
		</div>
	);
}
