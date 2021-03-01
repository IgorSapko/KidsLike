import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//switch togle
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import switchOperations from '../../../redux/week/weekOperations';
//style
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
//svg
import { Unchecked, Checked } from './SvgIconSwitch';
import weekOperation from '../../../redux/week/weekOperation';
// import weekSelector from '../../../redux/week/weekSelectors';

<<<<<<< HEAD
export default function TaskToggle({ item }) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	changeSwitchNumber = (id, date) => {
		dispatch(switchOperations.patchSwitch(id, { date }));
	};

=======
export default function TaskToggle({ item, currentDay }) {
	const [checked, setChecked] = useState(false);
	// const tasks = useSelector(weekSelector.getTasks);
	const dispatch = useDispatch();

useEffect(()=>{setChecked(item.days.find(day => day.date === currentDay).isCompleted)},[])
	
	console.log('item', item);
	console.log('currentDay', currentDay);
	const switchCompleteTask = (number, switcher) => {
		console.log('number', number);
		const persitNumber = Number(parseInt(number.reward));

		// const switcherNumber = switcher ? removeBall(persitNumber) : addBall(persitNumber);

		// return switcherNumber;
	};
	// console.log('Total number', numbers);
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
<<<<<<< HEAD
					changeSwitchNumber(item._id, item.days[0].date);
=======
					dispatch(weekOperation.taskSwitcher(item._id, currentDay));
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
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
