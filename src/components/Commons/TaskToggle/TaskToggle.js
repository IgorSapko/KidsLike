import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//switch togle
import Switch from 'react-switch';
//style
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
//svg
import { Unchecked, Checked } from './SvgIconSwitch';

import weekOperation from '../../../redux/week/weekOperation';

export default function TaskToggle({ item }) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	// const checked = item.days.
	const date = {date:'02-03-2021'};
console.log('item', item)
	const switchCompleteTask = (number, switcher) => {
		console.log('number', number);
		const persitNumber = Number(parseInt(number.reward));

		// const switcherNumber = switcher ? removeBall(persitNumber) : addBall(persitNumber);

		// return switcherNumber;
	};
	// console.log('Total number', numbers);
	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
					dispatch(weekOperation.taskSwitcher(item._id, date));
					setChecked(!checked);
				}}
				height={18}
				width={40}
				uncheckedIcon={
					<UncheckedIconWrapper>
						<Unchecked />
					</UncheckedIconWrapper>
				}
				checkedIcon={
					<CheckedIconWrapper>
						<Checked />
					</CheckedIconWrapper>
				}
			/>
		</div>
	);
}
