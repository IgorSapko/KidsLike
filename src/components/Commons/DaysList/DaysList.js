<<<<<<< HEAD
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import switchOperations from '../../../redux/week/weekOperations';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
//svg

//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

<<<<<<< HEAD
function SelectDays({ id, itemball }) {
	const [toggle, serToggle] = useState(false);
	const [visabiliry, setVisabiliry] = useState('hidden');
	const dispatch = useDispatch();
	const days = [
		['ПН', false],
		['ВТ', false],
		['СР', false],
		['ЧТ', false],
		['ПТ', false],
		['СБ', true],
		['ВС', false],
	];

	const handlechange = id => {
		serToggle(!toggle);
		console.log(id);
		if (toggle) {
			setVisabiliry('hidden');
			dispatch(switchOperations.patchWeek(id, 'тут має бути масив з true/false'));
		}

		if (!toggle) {
			setVisabiliry('visible');
			dispatch(switchOperations.patchWeek(id, 'тут має бути масив з true/false'));
		}
	};

	// const handleInputChange = (i, id) => {
	// 	console.log('Total number', days[i][1]);
	// };

	return (
		<div>
			{!toggle ? (
				<BlockAddSwitch onClick={() => handlechange(id)}>
					<PlusSvg />
				</BlockAddSwitch>
			) : (
				<div>
					<BlockAddSwitch onClick={() => handlechange(id)}>OK</BlockAddSwitch>
				</div>
			)}
			<BlockCheckbox style={{ visibility: visabiliry }}>
				{days.map((item, i) => {
					return (
						<BlockLabel key={item}>
							<BlockInput
								// checked={days[i][1]}
								// onChange={() => handleInputChange(i, id)}
								type="checkbox"
								id={item}
							/>

							{item[0]}
=======
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
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
						</BlockLabel>
					);
				})}
			</BlockCheckbox>
		</div>
	);
}
<<<<<<< HEAD

const mapStateToProps = state => ({
	number: state.auth.user.user.balance,
});

export default connect(mapStateToProps, null)(SelectDays);
=======
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
