import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DaysList from '../DaysList/DaysList';
import { BlockAddSwitch, PlusSvg } from './SelectDays.styles';
import weekOperation from '../../../redux/week/weekOperation';
import plus from '../../../img/plus.svg'
// import PlusSvg from '../SelectDays/PlusSvg';

export default function SelectDays({ item }) {
	const [checkedTasks, setCheckedTasks] = useState([]);
	const [isArrDaysTheSame, setisArrDaysTheSame] = useState(true);
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();

	const handlechange = () => {
		setToggle(!toggle);
	};

	const getCheckedTasks = (arrDays, isArrDaysTheSame) => {
		setisArrDaysTheSame(isArrDaysTheSame)
		setCheckedTasks([...arrDays]);
	};

	return (
		<>
			{!toggle ? (
				<BlockAddSwitch onClick={() => handlechange()}>
					<PlusSvg  src={plus}/>
				</BlockAddSwitch>
			) : (
				<>
					
						<BlockAddSwitch
							onClick={() => (
								handlechange(),
								!isArrDaysTheSame&&dispatch(
									weekOperation.taskActiveSwitcher(item._id ? item._id : item.id, checkedTasks),
								)
							)}
						>
							OK
						</BlockAddSwitch>
					
					<DaysList getCheckedTasks={getCheckedTasks} item={item} />
				</>
			)}
		</>
	);
}
