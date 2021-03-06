import React, {  useRef } from 'react';
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
	// const [title, setTitle] = useState('');
	// const [reward, setReward] = useState('');
	// const [taskAvatar, setTaskAvatar] = useState('');

	const formData = useRef(null);

	const handleOkBtn = event => {
		handleSubmit(event);
	};

	const handleCloseBtn = event => {
		event.preventDefault();
		closeModal();
	};

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	const rewardToNumber = Number(reward);
	// 	if (title !== '' && reward !== '' && Number.isInteger(Number(reward))) {
	// 		console.log(title, reward, taskAvatar);
	// 		addTask(title, rewardToNumber, taskAvatar);
	// 	} else {
	// 		console.log('Error');
	// 	};
	// 	setTitle('');
	// 	setReward('');
	// 	setTaskAvatar('');
	// };

	const handleSubmit = event => {
		event.preventDefault();

		addTask(formData);
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
				<Form onSubmit={handleSubmit} ref={formData}>
					<FileInputBlock>
						<FileInput type="file" name="taskAvatar" accept="image/jpeg,image/png" />
						<img width="18" height="18" src={pictureItemSvg} alt="" />
					</FileInputBlock>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							name="title"
							placeholder="Добавить задание..."
							autoComplete="off"
						/>
					</LabelDiv>
					<LabelDiv>
						<img width="18" height="18" src={pencil} alt="" />
						<TextInput
							type="text"
							name="reward"
							placeholder="Добавить баллы..."
							autoComplete="off"
						/>
					</LabelDiv>
					<Button onClick={handleOkBtn}>Ok</Button>
				</Form>
			</ModalBlock>
		</Screen>
	);
};

export default NewTaskModal;
