import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import selector from '../../../redux/selectors';
import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';
import { DateTime } from 'luxon';

export default function DaysList({ item, getCheckedTasks }) {
	const [arrDays, setArrDays] = useState([]);
	console.log('arrDays', arrDays);
	useEffect(() => {
		getCheckedTasks(arrDays);
	}, [arrDays]);
	const tasks = useSelector(selector.getTasks);
	const startWeekDate = useSelector(selector.getStartWeekDate);
	const numberOfDayOfWeekStartWeekDate = startWeekDate.split('-')[0];
	const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
	let arrOfDefaultDays;
	const today = DateTime.local().toFormat('dd');
	const numberOfDayOfWeekToday = Number(today) - Number(numberOfDayOfWeekStartWeekDate);
	console.log('numberOfDayOfWeekToday', numberOfDayOfWeekToday);
	useEffect(() => {
		arrOfDefaultDays = tasks
			.find(task => task._id === item._id)
			.days.map((day, ind) => {
				if (day.isActive) {
					return daysOfWeek[ind];
				} else return false;
			});
			console.log('arrOfDefaultDays')
		setArrDays([...arrOfDefaultDays]);
	}, []);

	const handleInputChange = (e, item, day, ind) => {
		if (arrDays[ind] !== day) {
			const deletedDay = [...arrDays.splice(ind, 1, day)];
			console.log('newarr arrDays', arrDays);
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
						console.log('arrDays[ind]', arrDays[ind]);
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

// import React, { useEffect, useState, useMemo } from 'react';
// import { useSelector } from 'react-redux';
// //svg
// import weekSelector from '../../../redux/week/weekSelectors';
// //style
// import { BlockAddSwitch, BlockCheckbox, BlockLabel, BlockInput } from './DaysList.styles';
// const daysOfWeek1 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
// export default function DaysList({ item, getCheckedTasks }) {
// 	const [arrDays, setArrDays] = useState([]);
// 	const [daysOfWeek, setDaysOfWeek] = useState([...daysOfWeek1]);

// 	console.log('arrDays', arrDays);
// 	useEffect(() => {
// 		getCheckedTasks(arrDays);
// 	}, [arrDays]);
// 	const tasks = useSelector(weekSelector.getTasks);

// 	// let arrOfDefaultDays;

// 	const arrOfDefaultDays = useMemo(
// 		() =>
// 			tasks
// 				.find(task => task._id === item._id)
// 				.days.map((day, ind) => {
// 					if (day.isActive) {
// 						return daysOfWeek[ind];
// 					} else return false;
// 				}),
// 		[daysOfWeek, item._id, tasks],
// 	);

// 	setArrDays([...arrOfDefaultDays]);

// 	const handleInputChange = (e, item, day, ind) => {
// 		if (arrDays[ind] !== day) {
// 			const deletedDay = [...arrDays.splice(ind, 1, day)];
// 			console.log('newarr arrDays', arrDays);
// 			setArrDays(arrDays => [...arrDays]);
// 		} else {
// 			const setDayFalse = [...arrDays.splice(ind, 1, false)];
// 			setArrDays(arrDays => [...arrDays]);
// 		}
// 	};
// 	return (
// 		<div>
// 			<BlockCheckbox>
// 				{daysOfWeek.map((day, ind) => {
// 					return (
// 						<BlockLabel key={day}>
// 							<BlockInput
// 								onChange={e => handleInputChange(e, item, day, ind)}
// 								type="checkbox"
// 								checked={arrDays[ind]}
// 								id={day}
// 							/>
// 							{day}
// 						</BlockLabel>
// 					);
// 				})}
// 			</BlockCheckbox>
// 		</div>
// 	);
// }
