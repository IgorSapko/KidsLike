import React, { useState } from 'react';
import {
	Screen,
	ModalBlock,
	Header,
	Image,
	Form,
	LabelDiv,
	TextInput,
	FileInputBlock,
	FileInput,
	Button,
	CloseBtn,
} from './newTaskModal.styles';
import img from '../../../img/add_modal.png';
import pencil from '../../../img/pencil.svg';
import pictureItemSvg from '../../../img/pictureItem.svg';
import closeCross from '../../../img/closeCross.svg';

const NewTaskModal = ({ addTask, closeModal }) => {
	const [title, setTitle] = useState('');
	const [reward, setReward] = useState('');
	const [taskAvatar, setTaskAvatar] = useState('');

	const handleOkBtn = event => {
		handleSubmit(event);
	};

	const handleCloseBtn = event => {
		event.preventDefault();
		closeModal();
	};

	const handleSubmit = event => {
		event.preventDefault();
		const rewardToNumber = Number(reward);
		if (title !== '' && reward !== '' && Number.isInteger(Number(reward))) {
			console.log(title, reward, taskAvatar);
			addTask(title, rewardToNumber, taskAvatar);
		} else {
			console.log('Error');
		};
		setTitle('');
		setReward('');
		setTaskAvatar('');
	};
	return (
		<Screen>
			<ModalBlock>
				<Header>
					<Image src={img} alt="Custom task" />
					<CloseBtn onClick={handleCloseBtn}>
						<img src={closeCross} alt="Close" />
					</CloseBtn>
				</Header>
				<Form onSubmit={handleSubmit} enctype="multipart/form-data">
					<FileInputBlock>
						<FileInput
							type="file"
							value={taskAvatar}
							onChange={e => setTaskAvatar(e.target.value)}
						/>
						<img width="18" height="18" src={pictureItemSvg} alt="" />
					</FileInputBlock>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							placeholder="Добавить задание..."
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</LabelDiv>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							placeholder="Добавить баллы..."
							value={reward}
							onChange={e => setReward(e.target.value)}
						/>
					</LabelDiv>
					<Button onClick={handleOkBtn}>Ok</Button>
				</Form>
			</ModalBlock>
		</Screen>
	);
};

export default NewTaskModal;
