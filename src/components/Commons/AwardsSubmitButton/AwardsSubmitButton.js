import React from 'react';
import { useSelector } from 'react-redux';
import { AwardsSubmitBtn } from './AwardsSubmitButton.styles';
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';

export default function AwardsSubmitButton({ itemsAll, handleSwich }) {
	const 	balance = useSelector(state=>state.auth.user.balance);
	let totalPriceOfAllGifts = 0;
	itemsAll.map(item => {totalPriceOfAllGifts = totalPriceOfAllGifts + item.price});
		return (
		<>
			<NotificationContainer />
			<AwardsSubmitBtn
				onClick={() => {
					itemsAll.length <1
						? notification({
							type: 'warning',
							message: 'Ничего не выбрано',
					  })
						:balance>totalPriceOfAllGifts? handleSwich():notification({
							type: 'warning',
							message: 'Не достаточно баллов для покупки выбранных подарков',
					  })
				}}
			>
				Подтвердить
			</AwardsSubmitBtn>
		</>
	);
}
