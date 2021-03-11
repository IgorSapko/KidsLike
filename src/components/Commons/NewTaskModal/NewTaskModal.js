import React, { Children, useRef, useState } from 'react';
import ModalBackDrop from '../ModalBackDrop/ModalBackDrop'
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';
import {
	
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
	NotificationDiv,
} from './newTaskModal.styles';
import img from '../../../img/add_modal.png';
import pencil from '../../../img/pencil.svg';
import pictureItemSvg from '../../../img/pictureItem.svg';
// import closeCross from '../../../img/closeCross.svg';

const NewTaskModal = ({ addTask, closeModal }) => {
	const [title, setTitle] = useState('');
	const [reward, setReward] = useState('');
	const [taskAvatar, setTaskAvatar] = useState('');

	const formData = useRef(null);

	const handleOkBtn = event => {
		handleSubmit(event);
	};

	const handleCloseBtn = event => {
		event.preventDefault();
		closeModal();
	};
	const onImageChange = event => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = e => {
				setTaskAvatar(e.target.result);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (title !== '' && reward !== '' && Number.isInteger(Number(reward))) {
			addTask(formData);
			setTitle('');
			setReward('');
			setTaskAvatar('');
		} else if (title === '' || reward === '') {
			notification({
				type: 'warning',
				message: 'Заполните все поля',
			});
		} else if (!Number.isInteger(Number(reward))) {
			notification({
				type: 'warning',
				message: 'Баллы - целое число',
			});
		}
	};

	return (
		<ModalBackDrop >
			<NotificationDiv>
				<NotificationContainer />
			</NotificationDiv>
			<ModalBlock>
				<Header>
					<Image src={taskAvatar ? taskAvatar : 'https://storage.googleapis.com/kidslikev2_bucket/f7c3588d0fe94e5eb35a11bbba923e1e.png'} alt="Custom task" />
					<CloseBtn onClick={handleCloseBtn}>
						<img src="https://storage.googleapis.com/kidslikev2_bucket/08942ec472518083fbe6e2a6fb95674d.jpg" alt="Close" />
					</CloseBtn>
				</Header>
				<Form onSubmit={handleSubmit} ref={formData}>
					<FileInputBlock>
						<FileInput
							type="file"
							name="taskAvatar"
							accept="image/jpeg,image/png"
							onChange={onImageChange}
						/>
						<img width="18" height="18" src={pictureItemSvg} alt="" />
					</FileInputBlock>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							name="title"
							placeholder="Добавить задание..."
							autoComplete="off"
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</LabelDiv>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							name="reward"
							placeholder="Добавить баллы..."
							autoComplete="off"
							value={reward}
							onChange={e => setReward(e.target.value)}
						/>
					</LabelDiv>
					<Button onClick={handleOkBtn}>OK</Button>
				</Form>
			</ModalBlock>
				</ModalBackDrop>
	);
};

export default NewTaskModal;
