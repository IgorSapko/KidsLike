import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import weekOperation from '../../../redux/week/weekOperation';

function CongratsModal({ idItems, itemsAll, setOpen }) {
	const [showModal, setShowModal] = useState(true);
	const dispatch = useDispatch();

	const closeModal = () => {
		const giftId = {
			giftIDs: idItems,
		};
		setOpen(false);
		setShowModal(showModal => !showModal);
		if (showModal) {
			dispatch(weekOperation.giftsOrder(giftId));
		}
	};

	return (
		<ModalBackDrop>
			<ModalWrapper onClick={closeModal}>
				<ModalCongrats showModal={showModal}>
					<ImgCat src="https://storage.googleapis.com/kidslikev2_bucket/4c67b0f578c6e7ff1d0b504f8019ffc9.png" />
					<Congrats>Поздравляем! Ты получаешь:</Congrats>
					<BtnClose src="https://storage.googleapis.com/kidslikev2_bucket/08942ec472518083fbe6e2a6fb95674d.jpg" />
					<PrizesWrapper>
						{itemsAll.map(item => {
							return (
								<PrizesWrapper_block key={item.title}>
									<ChosenPrise src={item.imageUrl} />
									<ChosenPrise_name>{item.title}</ChosenPrise_name>
								</PrizesWrapper_block>
							);
						})}
					</PrizesWrapper>
				</ModalCongrats>
			</ModalWrapper>
		</ModalBackDrop>
	);
}

export default CongratsModal;
