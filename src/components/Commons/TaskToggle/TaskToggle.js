import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//switch togle
import Switch from 'react-switch';
//style
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
//svg
import { Unchecked, Checked } from './SvgIconSwitch';
// import authActions from '../../../redux/auth/authActions'
import weekOperation from '../../../redux/week/weekOperation';
// import weekSelector from '../../../redux/week/weekSelectors';

export default function TaskToggle({ item, currentDay, summNumber }) {
	const [checked, setChecked] = useState(false);
	// const tasks = useSelector(weekSelector.getTasks);
	const dispatch = useDispatch();

	useEffect(() => {
		item.days && setChecked(item.days.find(day => day.date === currentDay).isCompleted);
	}, [currentDay, item.days]);

	// console.log('item', item);
	// console.log('currentDay', currentDay);
	// console.log('summNumber', summNumber);
	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
					item.days
						? dispatch(weekOperation.taskSwitcher(item._id?item._id:item.id, currentDay))
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
