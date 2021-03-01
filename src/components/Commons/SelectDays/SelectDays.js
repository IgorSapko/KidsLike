<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
=======
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PlusSvg from '../SelectDays/PlusSvg';
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
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
<<<<<<< HEAD

=======
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
import DaysList from '../DaysList/DaysList';
import weekOperation from '../../../redux/week/weekOperation';

<<<<<<< HEAD
function Stateless({ itemTask }) {
	
	return (
		<BlockPeopleTask>
			{itemTask.map(item => {
				return (
					<BlockPeopleTask_item id={item._id} key={item._id}>
						<BlockPeopleTask_img>
							<img src={item.imageUrl} />
						</BlockPeopleTask_img>

						<BlockPeopleTask_item_text>
							<BlockPeopleTask_item_inform_title>{item.title}</BlockPeopleTask_item_inform_title>
							<BlockPeopleTask_item_inform>
								<BlockPeopleTask_item_inform_pad>{item.reward} Балла</BlockPeopleTask_item_inform_pad>

								<DaysList id={item._id} itemball={item.reward} />
							</BlockPeopleTask_item_inform>
						</BlockPeopleTask_item_text>
					</BlockPeopleTask_item>
				);
			})}
		</BlockPeopleTask>
=======
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
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
	);
}

const mapStateToProps = state => ({
	itemTask: state.auth.user.week.tasks,
});

export default connect(mapStateToProps, null)(Stateless);
