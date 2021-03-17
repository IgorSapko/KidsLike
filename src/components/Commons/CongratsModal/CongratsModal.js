import React, { useCallback, useEffect } from 'react';
import {
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
	const handleCloseModal = useCallback(
		({ code, target }) => {
			if (code === 'Escape' || target.id === 'backdrop') {
				setOpen(false);
			}
		},
		[setOpen],
	);

	useEffect(() => {
		window.addEventListener('click', handleCloseModal);
		window.addEventListener('keydown', handleCloseModal);

		return () => {
			window.removeEventListener('click', handleCloseModal);
			window.removeEventListener('keydown', handleCloseModal);
		};
	}, [handleCloseModal]);

	return (
		<ModalBackDrop>
			<ModalCongrats>
				<ImgCat src="https://storage.googleapis.com/kidslikev2_bucket/4c67b0f578c6e7ff1d0b504f8019ffc9.png" />
				<Congrats>Поздравляем! Ты получаешь:</Congrats>
				<BtnClose type="button" autoFocus onClick={() => setOpen(false)}>
					&#10005;
				</BtnClose>
				<PrizesWrapper>
					{itemsAll.map(({ _id, title, imageUrl }) => (
						<PrizesWrapper_block key={_id}>
							<ChosenPrise img={imageUrl} />
							<ChosenPrise_name>{title}</ChosenPrise_name>
						</PrizesWrapper_block>
					))}
				</PrizesWrapper>
			</ModalCongrats>
		</ModalBackDrop>
	);
};

export default CongratsModal;
