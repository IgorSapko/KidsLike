import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import {
	ImgCat,
	Congrats,
	BtnClose,
	CongratsModalWrapper,
	PrizesWrapper,
	PrizesWrapper_block,
	ChosenPrise,
	ChosenPrise_name,
} from './CongratsModal.styles';
import weekOperation from '../../../redux/week/weekOperation';

export default function CongratsModal({ idItems, itemsAll }) {
	const [open, setOpen] = useState(true);
	const duspatch = useDispatch();

	const handleSwich = () => {
		setOpen(!open);

		const giftId = {
			giftIDs: idItems,
		};
		if (open) {
			duspatch(weekOperation.giftsOrder(giftId));
		}
	};

	const body = (
		<CongratsModalWrapper>
			<ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png" />
			<Congrats>Поздравляем! Ты получаешь:</Congrats>
			<BtnClose onClick={handleSwich} src="https://i.ibb.co/dDhJBd5/BtnClose.jpg"></BtnClose>
			<PrizesWrapper>
				{itemsAll.map(item => {
					return (
						<PrizesWrapper_block key={item.imageUrl}>
							<ChosenPrise src={item.imageUrl} />
							<ChosenPrise_name>{item.title}</ChosenPrise_name>
						</PrizesWrapper_block>
					);
				})}
			</PrizesWrapper>
		</CongratsModalWrapper>
	);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleSwich}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}
