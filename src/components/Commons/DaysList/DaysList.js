import React, { useState } from 'react';
//svg

//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

export default function DaysList({  itemball }) {
	// const [toggle, setToggle] = useState(false);
	const [listTask, setListTask] = useState(0);
	const [visabiliry, setVisabiliry] = useState('hidden');

	const days = [
		['ПН', 'Monday'],
		['ВТ', 'Tuesday'],
		['СР', 'Wednesday'],
		['ЧТ', 'Thursday'],
		['ПТ', 'Friday'],
		['СБ', 'Saturday'],
		['ВС', 'Sunday'],
	];

	// const handlechange = () => {
	// 	setToggle(!toggle);

	// 	if (toggle) {
	// 		setVisabiliry('hidden');
	// 		summNumber(listTask);
	// 		setListTask(0);
	// 	}

	// 	if (!toggle) {
	// 		setVisabiliry('visible');
	// 	}
	// };

	const handleInputChange = (e, itemball) => {
		const selectChecked = e.target.checked;
		const persitNumber = Number(parseInt(itemball));

		const resultSwitchNumber = selectChecked
			? setListTask(prev => {
					return Number(prev) + persitNumber;
			  })
			: setListTask(prev => {
					return Number(prev) - persitNumber;
			  });
		return resultSwitchNumber;
	};

	return (
		<div>
			
			<BlockCheckbox style={{ visibility: visabiliry }}>
				{days.map(item => {
					return (
						<BlockLabel key={item[0]}>
							<BlockInput
								onChange={e => handleInputChange(e, itemball)}
								type="checkbox"
								id={item[1]}
							/>
							{item[0]}
						</BlockLabel>
					);
				})}
			</BlockCheckbox>
		</div>
	);
}

// export default function SelectDays({ summNumber, itemball }) {
// 	const [toggle, setToggle] = useState(false);
// 	const [listTask, setListTask] = useState(0);
// 	const [visabiliry, setVisabiliry] = useState('hidden');

// 	const days = [
// 		['ПН', 'Monday'],
// 		['ВТ', 'Tuesday'],
// 		['СР', 'Wednesday'],
// 		['ЧТ', 'Thursday'],
// 		['ПТ', 'Friday'],
// 		['СБ', 'Saturday'],
// 		['ВС', 'Sunday'],
// 	];

// 	const handlechange = () => {
// 		setToggle(!toggle);

// 		if (toggle) {
// 			setVisabiliry('hidden');
// 			summNumber(listTask);
// 			setListTask(0);
// 		}

// 		if (!toggle) {
// 			setVisabiliry('visible');
// 		}
// 	};

// 	const handleInputChange = (e, itemball) => {
// 		const selectChecked = e.target.checked;
// 		const persitNumber = Number(parseInt(itemball));

// 		const resultSwitchNumber = selectChecked
// 			? setListTask(prev => {
// 					return Number(prev) + persitNumber;
// 			  })
// 			: setListTask(prev => {
// 					return Number(prev) - persitNumber;
// 			  });
// 		return resultSwitchNumber;
// 	};

// 	return (
// 		<div>
// 			{!toggle ? (
// 				<BlockAddSwitch onClick={handlechange}>
// 					<PlusSvg />
// 				</BlockAddSwitch>
// 			) : (
// 				<div>
// 					<BlockAddSwitch onClick={handlechange}>OK</BlockAddSwitch>
// 				</div>
// 			)}
// 			<BlockCheckbox style={{ visibility: visabiliry }}>
// 				{days.map(item => {
// 					return (
// 						<BlockLabel key={item[0]}>
// 							<BlockInput
// 								onChange={e => handleInputChange(e, itemball)}
// 								type="checkbox"
// 								id={item[1]}
// 							/>
// 							{item[0]}
// 						</BlockLabel>
// 					);
// 				})}
// 			</BlockCheckbox>
// 		</div>
// 	);
// }
