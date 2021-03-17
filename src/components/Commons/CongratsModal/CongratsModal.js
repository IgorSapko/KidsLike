import React, { useState } from 'react';
import {
	ModalWrapper,
	ImgCat,
	Congrats,
	BtnClose,
	ModalCongrats,
	PrizesWrapper,
	PrizesWrapper_block,
	ChosenPrise,
	ChosenPrise_name,
} from './CongratsModal.styles';
import ModalBackDrop from '../ModalBackDrop/ModalBackDrop';

const CongratsModal = ({ itemsAll, setOpen }) => {
	const [showModal, setShowModal] = useState(true);

	const closeModal = () => {
		setOpen(false);
		setShowModal(showModal => !showModal);
	};

	return (
		<ModalBackDrop>
			<ModalWrapper onClick={closeModal}>
				<ModalCongrats showModal={showModal}>
					<ImgCat src="https://storage.googleapis.com/kidslikev2_bucket/4c67b0f578c6e7ff1d0b504f8019ffc9.png" />
					<Congrats>Поздравляем! Ты получаешь:</Congrats>
					<BtnClose src="https://storage.googleapis.com/kidslikev2_bucket/08942ec472518083fbe6e2a6fb95674d.jpg" />
					<PrizesWrapper>
						{itemsAll.map(({ _id, title, imageUrl }) => (
							<PrizesWrapper_block key={_id}>
								<ChosenPrise src={imageUrl} />
								<ChosenPrise_name>{title}</ChosenPrise_name>
							</PrizesWrapper_block>
						))}
					</PrizesWrapper>
				</ModalCongrats>
			</ModalWrapper>
		</ModalBackDrop>
	);
};

export default CongratsModal;
