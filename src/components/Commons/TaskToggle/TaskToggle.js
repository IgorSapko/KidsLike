import React, { useState } from 'react';
//switch togle
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import switchOperations from '../../../redux/week/weekOperations';
//style
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
//svg
import { Unchecked, Checked } from './SvgIconSwitch';

export default function TaskToggle({ item }) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	changeSwitchNumber = (id, date) => {
		dispatch(switchOperations.patchSwitch(id, { date }));
	};

	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
					changeSwitchNumber(item._id, item.days[0].date);
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
