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
import weekOperation from '../../../redux/week/weekOperation';

export default function SelectDays({ item }) {
	const [checkedTasks, setCheckedTasks] = useState([]);
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();

	const handlechange = () => {
		setToggle(!toggle);
	};

	const getCheckedTasks = arrDays => {
		console.log('arrDays from SD', arrDays);

		setCheckedTasks([...arrDays]);
	};

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
								handlechange(), dispatch(weekOperation.taskActiveSwitcher(item._id, checkedTasks))
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
