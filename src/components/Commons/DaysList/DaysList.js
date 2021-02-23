import React, { useState } from 'react';
//svg
import PlusSvg from './PlusSvg';
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

export default function SelectDays({ summNumber, itemball }) {
	const [toggle, serToggle] = useState(false);
	const [listTask, serListTask] = useState(0);
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

	const handlechange = () => {
		serToggle(!toggle);

		if (toggle) {
			setVisabiliry('hidden');
			summNumber(listTask);
			serListTask(0);
		}

		if (!toggle) {
			setVisabiliry('visible');
		}
	};

	const handleInputChange = (e, itemball) => {
		const selectChecked = e.target.checked;
		const persitNumber = Number(parseInt(itemball));

		const resultSwitchNumber = selectChecked
			? serListTask(prev => {
					return Number(prev) + persitNumber;
			  })
			: serListTask(prev => {
					return Number(prev) - persitNumber;
			  });
		return resultSwitchNumber;
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
				</div>
			)}
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

// import React, { useState } from 'react';
// //svg
// import PlusSvg from './PlusSvg';
// //style
// import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

// export default function SelectDays({ summNumber, itemball }) {
// 	const [toggle, serToggle] = useState(false);
// 	const [listTask, serListTask] = useState([]);
// 	const [check, setCheck] = useState(false);
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
// 		serToggle(!toggle);

// 		if (toggle) {
// 			summNumber(listTask);
// 			serListTask([]);
// 		}
// 	};
// 	const selectOneCheck = e => {
// 		const namesSelect = e.target.checked;
// 		if(namesSelect === true){

// 		}

// 	};
// 	const handleInputChange = (itemball, item) => {
// 		serListTask([...listTask, { itemball, item }]);
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

// 					<BlockCheckbox>
// 						{days.map(item => {
// 							return (
// 								<BlockLabel key={item[0]} onChange={() => handleInputChange(itemball, item[0])}>
// 									<BlockInput
// 										onChange={e => sekectOneCheck(e)}
// 										type="checkbox"
// 										id={item[1]}
// 									/>
// 									{item[0]}
// 								</BlockLabel>
// 							);
// 						})}
// 					</BlockCheckbox>
// 				</div>
// 			)}
// 		</div>
// 	);
// }
