import React, { useState } from 'react';
import { connect } from 'react-redux';
import weekActions from '../../../redux/week/weekActions';
//svg
import PlusSvg from './PlusSvg';
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

function SelectDays({ addBall, removeBall, itemball, number }) {
	const [toggle, serToggle] = useState(false);
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
		}

		if (!toggle) {
			setVisabiliry('visible');
		}
	};

	const handleInputChange = (e, itemball) => {
		const selectChecked = e.target.checked;
		const persitNumber = Number(parseInt(itemball));

		const resultSwitchNumber = selectChecked ? addBall(persitNumber) : removeBall(persitNumber);

		return resultSwitchNumber;
	};
	console.log('Total number', number);
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

const mapStateToProps = state => ({
	number: state.week.balance,
});

const mapDispatchToProps = {
	addBall: weekActions.addBallSuccess,
	removeBall: weekActions.removeBallSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDays);
