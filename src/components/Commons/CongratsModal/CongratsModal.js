import React, { useCallback, useEffect } from 'react';
import {
	ImgCat,
	Congrats,
	BtnClose,
	ModalCongrats,
	PrizesWrapper,
	PrizesWrapperBlock,
	ChosenPrise,
	ChosenPriseName,
} from './CongratsModal.styles';
import ModalBackDrop from '../ModalBackDrop/ModalBackDrop';
import weekOperation from 'redux/week/weekOperation';
import { useDispatch } from 'react-redux';

const CongratsModal = ({ itemsAll, setOpen }) => {
	const dispatch = useDispatch();
	const handleCloseModal = useCallback(
		({ code, target }) => {
			if (code === 'Escape' || target.id === 'backdrop') {
				setOpen(false);
			}
			dispatch(weekOperation.giftsGetting());
		},
		[dispatch, setOpen],
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
						<PrizesWrapperBlock key={_id}>
							<ChosenPrise img={imageUrl} />
							<ChosenPriseName>{title}</ChosenPriseName>
						</PrizesWrapperBlock>
					))}
				</PrizesWrapper>
			</ModalCongrats>
		</ModalBackDrop>
	);
};

export default CongratsModal;
