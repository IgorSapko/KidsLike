import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
import weekOperation from '../../../redux/week/weekOperation';
import { Unchecked, Checked } from './SvgIconSwitch';

export default function TaskToggle({ item, currentDay, summNumber }) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		item.days && setChecked(item.days.find(day => day.date === currentDay).isCompleted);
	}, [currentDay, item.days]);

	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
					item.days
						? dispatch(weekOperation.taskSwitcher(item._id ? item._id : item.id, currentDay))
						: summNumber(item, checked);
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
