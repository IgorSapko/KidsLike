import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import switchOperations from '../../../redux/week/weekOperations';
//svg
import PlusSvg from './PlusSvg';
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

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
						</BlockLabel>
					);
				})}
			</BlockCheckbox>
		</div>
	);
}

const mapStateToProps = state => ({
	number: state.auth.user.user.balance,
});

export default connect(mapStateToProps, null)(SelectDays);
