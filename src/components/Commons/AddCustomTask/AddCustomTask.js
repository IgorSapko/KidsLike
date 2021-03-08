import React from 'react';
import {AddLabel, AddTaskBlock, AddBtn} from './addCustomTask.styles'
import yellowPlusSvg from '../../../img/yellowPlus.svg';

const AddCustomTask = ({swowModal}) => {
	return (
		<div>
			<AddTaskBlock>
				<AddLabel>{"Хочешь получить больше призов - добавь задачи :)"}</AddLabel>
				<AddBtn onClick={() => {
					swowModal()
				}}>
					<img height="54" width="54" src={yellowPlusSvg} alt="Add task"></img>
				</AddBtn>
			</AddTaskBlock>
		</div>
	);
};

export default AddCustomTask;
