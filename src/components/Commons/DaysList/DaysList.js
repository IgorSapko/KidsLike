import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import selector from '../../../redux/selectors';
import { BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';
import { DateTime } from 'luxon';
import { daysOfWeek } from '../../../utils/Helpers';

export default function DaysList({ item, getCheckedTasks }) {
	const [arrDays, setArrDays] = useState([]);
	const [arrDaysDefaults, setarrDaysDefaults] = useState([]);
	useEffect(() => {
		const isArrDaysTheSame = arrDays.every((item, i) => item === arrDaysDefaults[i]);
		getCheckedTasks(arrDays, isArrDaysTheSame);
	}, [arrDays]);
	const tasks = useSelector(selector.getTasks);
	const startWeekDate = useSelector(selector.getStartWeekDate);
	const numberOfDayOfWeekStartWeekDate = startWeekDate.split('-')[0];
	let arrOfDefaultDays;
	const today = DateTime.local().toFormat('dd');
	const numberOfDayOfWeekToday = Number(today) - Number(numberOfDayOfWeekStartWeekDate);
	useEffect(() => {
		arrOfDefaultDays = tasks
			.find(task => task._id === item._id)
			.days.map((day, ind) => {
				if (day.isActive) {
					return daysOfWeek[ind];
				} else return false;
			});
		setArrDays([...arrOfDefaultDays]);
		setarrDaysDefaults([...arrOfDefaultDays]);
	}, []);

	const handleInputChange = (e, item, day, ind) => {
		if (arrDays[ind] !== day) {
			const deletedDay = [...arrDays.splice(ind, 1, day)];
			setArrDays(arrDays => [...arrDays]);
		} else {
			const setDayFalse = [...arrDays.splice(ind, 1, false)];
			setArrDays(arrDays => [...arrDays]);
		}
	};
	return (
		arrDays.length > 0 && (
			<div>
				<BlockCheckbox>
					{daysOfWeek.map((day, ind) => {
						return (
							<BlockLabel key={day}>
								<BlockInput
									onChange={e => handleInputChange(e, item, day, ind)}
									type="checkbox"
									checked={arrDays[ind]}
									id={day}
									disabled={ind < numberOfDayOfWeekToday ? true : false}
								/>
								{day}
							</BlockLabel>
						);
					})}
				</BlockCheckbox>
			</div>
		)
	);
}
