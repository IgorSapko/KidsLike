import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//svg
import weekSelector from '../../../redux/week/weekSelectors';
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';

export default function DaysList({ item, getCheckedTasks }) {
	const [arrDays, setArrDays] = useState([]);
	const [firstHandleChange, setfirstHandleChange] = useState(true);

	console.log('arrDays', arrDays);
	useEffect(() => {
		getCheckedTasks(arrDays);
	}, [arrDays]);
	// useEffect(()=>{isChecked=tasks.find(task=>task._id===item._id).days.map(day=>day.isActive)},[])
	const tasks = useSelector(weekSelector.getTasks);

	const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
	let arrOfDefaultDays
	// useEffect(()=>{ 
	// 	},[])
	arrOfDefaultDays = tasks
		.find(task => task._id === item._id)
		.days.map((day, ind) => {
			if (day.isActive) {
				return daysOfWeek[ind];
			} else return false;
		})

	console.log('arrOfDefaultDays', arrOfDefaultDays);
	let isChecked;
	const handleInputChange = (e, item, day) => {
		const isChecked = e.target.checked;
		console.log('isChecked', isChecked);
		console.log('firstHandleChange',firstHandleChange)
		if(firstHandleChange){
			console.log('111');
			console.log('arrDays from handle',arrDays);
			console.log('arrOfDefaultDays from handle',arrOfDefaultDays)
			setArrDays([...arrOfDefaultDays,...arrDays, day]);
			console.log('firstHandleChange from handle',firstHandleChange);
			
			setfirstHandleChange(false);
		}
		
		// console.log('item event', item)
		if (isChecked) {
			setArrDays([...arrDays, day]);
		} else {
			setArrDays([...arrDays.filter(uncheckedDay => uncheckedDay !== day)]);
		}
	};
	// tasks.find(task=>task._id===item._id).days[ind].isActive
	return (
		<div>
			<BlockCheckbox>
				{daysOfWeek.map((day, ind) => {
					return (
						<BlockLabel key={day}>
							<BlockInput
								onChange={e => handleInputChange(e, item, day)}
								type="checkbox"
								checked={firstHandleChange ? arrOfDefaultDays[ind] : isChecked}
								id={day}
							/>
							{day}
						</BlockLabel>
					);
				})}
			</BlockCheckbox>
		</div>
	);
}
