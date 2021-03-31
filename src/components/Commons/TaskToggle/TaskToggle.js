import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import {
	UncheckedIconWrapper,
	CheckedIconWrapper,
	CheckedImg,
	UnCheckedImg,
} from './TaskToggle.styles';
import weekOperation from '../../../redux/week/weekOperation';
import weekActions from 'redux/week/weekActions';
import selectors from 'redux/selectors';

export default function TaskToggle({ item, currentDay, summNumber }) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	const gifts = useSelector(selectors.getGifts);

	useMemo(() => {
		item.days && setChecked(item.days.find(day => day.date === currentDay).isCompleted);
	}, [currentDay, item.days]);

	useMemo(() => {
		!item.days && setChecked(gifts.find(gift => gift._id===item._id).isSelected);
	}, [gifts, item.days, item._id]);

	// useMemo(() => {
	// 	item.days
	// 		? setChecked(item.days.find(day => day.date === currentDay).isCompleted)
	// 		: setChecked(gifts.find(gift => gift._id === item._id).isSelected);
	// }, [currentDay, item.days, gifts, item._id]);

	const toggleGifts = itemId => {
		summNumber(item, checked);
		dispatch(weekActions.giftsToggle(itemId));
	};

	return (
		<div>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => {
					item.days
						? dispatch(weekOperation.taskSwitcher(item._id ? item._id : item.id, currentDay))
						: toggleGifts(item._id);
					setChecked(!checked);
				}}
				height={18}
				width={40}
				uncheckedIcon={
					<UncheckedIconWrapper>
						<UnCheckedImg src="https://storage.googleapis.com/kidslikev2_bucket/62ec3a5583a59725b3e27208d81ec485.svg" />
					</UncheckedIconWrapper>
				}
				checkedIcon={
					<CheckedIconWrapper>
						<CheckedImg src="https://storage.googleapis.com/kidslikev2_bucket/022078503a6384ccf8922074f0e9ea7c.svg" />
					</CheckedIconWrapper>
				}
			/>
		</div>
	);
}
