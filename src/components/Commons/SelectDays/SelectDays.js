import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PlusSvg from '../SelectDays/PlusSvg';
import {
	BlockPeopleTask,
	BlockPeopleTask_item,
	BlockPeopleTask_img,
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_inform_pad,
	BlockPeopleTask_item_inform_title,
	BlockPeopleTask_item_text,
	BlockAddSwitch,
} from './SelectDays.styles';
import DaysList from '../DaysList/DaysList';
import { nameOfDaysFunc } from '../../../utils/Helpers';
import weekOperation from '../../../redux/week/weekOperation';

export default function SelectDays({ item }) {
	const [checkedTasks, setCheckedTasks] = useState([]);
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	// const daysOfWeek= nameOfDaysFunc();
	// console.log('nameOfDaysFunc', daysOfWeek)
	const handlechange = () => {
		setToggle(!toggle);
	};

	const getCheckedTasks = arrDays => {
		console.log('arrDays from SD', arrDays);

		setCheckedTasks([...arrDays]);
	};
	console.log('item', item);
	return (
		<>
			{!toggle ? (
				<BlockAddSwitch onClick={() => handlechange()}>
					<PlusSvg />
				</BlockAddSwitch>
			) : (
				<>
					<div>
						<BlockAddSwitch
							onClick={() => (
								handlechange(),
								dispatch(
									weekOperation.taskActiveSwitcher(item._id ? item._id : item.id, checkedTasks),
								)
							)}
						>
							OK
						</BlockAddSwitch>
					</div>
					<DaysList getCheckedTasks={getCheckedTasks} item={item} />
				</>
			)}
		</>
	);
}
