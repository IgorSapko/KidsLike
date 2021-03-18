import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { UncheckedIconWrapper, CheckedIconWrapper, CheckedImg, UnCheckedImg } from './TaskToggle.styles';
import weekOperation from '../../../redux/week/weekOperation';



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
						{/* <Unchecked /> */}
						<UnCheckedImg src='https://storage.googleapis.com/kidslikev2_bucket/62ec3a5583a59725b3e27208d81ec485.svg'/>
					</UncheckedIconWrapper>
				}
				checkedIcon={
					<CheckedIconWrapper>
						{/* <Checked /> */}
						<CheckedImg src='https://storage.googleapis.com/kidslikev2_bucket/022078503a6384ccf8922074f0e9ea7c.svg'/>
					</CheckedIconWrapper>
				}
			/>
		</div>
	);
}
