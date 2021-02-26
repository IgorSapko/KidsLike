import React from 'react';
import { connect } from 'react-redux';
import {
	BlockPeopleTask,
	BlockPeopleTask_item,
	BlockPeopleTask_img,
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_inform_pad,
	BlockPeopleTask_item_inform_title,
	BlockPeopleTask_item_text,
} from './SelectDays.styles';

import DaysList from '../DaysList/DaysList';

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
	);
}

const mapStateToProps = state => ({
	itemTask: state.auth.user.week.tasks,
});

export default connect(mapStateToProps, null)(Stateless);
