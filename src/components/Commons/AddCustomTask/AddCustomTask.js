import React from 'react';
import {AddLabel, AddTaskBlock, AddBtn} from './addCustomTask.styles'

const AddCustomTask = ({swowModal}) => {
	return (
		<div>
			<AddTaskBlock>
				<AddLabel>{"Хочешь получить больше призов - добавь задачи :)"}</AddLabel>
				<AddBtn onClick={() => {
					swowModal()
				}}>
					<img height="54" width="54" src='https://storage.googleapis.com/kidslikev2_bucket/f9a52177d115707f06fdec5e84420327.svg' alt="Add task"></img>
				</AddBtn>
			</AddTaskBlock>
		</div>
	);
};

export default AddCustomTask;
