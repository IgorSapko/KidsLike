import React from 'react';
import { AwardsSubmitBtn, NotificationDiv } from './AwardsSubmitButton.styles';
import notification from '../../../services/notification';
import { NotificationContainer } from 'react-notifications';

export default function AwardsSubmitButton({ itemsAll, handleSwich }) {
	return (
		<>
			
				<NotificationContainer />
			
			<AwardsSubmitBtn
				onClick={() => {
					itemsAll.length > 0
						? handleSwich()
						: notification({
								type: 'warning',
								message: 'Ничего не выбрано',
						  });
				}}
			>
				Подтвердить
			</AwardsSubmitBtn>
		</>
	);
}
