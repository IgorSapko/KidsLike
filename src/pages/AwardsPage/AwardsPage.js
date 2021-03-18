import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Commons/Card/Card';
import AwardsSubmitButton from '../../components/Commons/AwardsSubmitButton/AwardsSubmitButton';
import CongratsModal from '../../components/Commons/CongratsModal/CongratsModal';
import {
	BlockPeopleTaskAwards,
	TopWrapper,
	MyPrises,
	PriseImg,
	PriseText,
	AwardsPageWrapper,
} from './AwardsPage.styles';
import selector from '../../redux/selectors';
import weekOperation from '../../redux/week/weekOperation';
import CurrentDay from 'components/Commons/CurrentDay/CurrentDay';
import notification from 'services/notification';
import { NotificationContainer } from 'react-notifications';

export default function AwardsPage() {
	const dispatch = useDispatch();
	const gifts = useSelector(selector.getGifts);
	const balance = useSelector(state => state.auth.user.balance);

	const [open, setOpen] = useState(false);
	const [idItems, setidItems] = useState([]);
	const [itemsAll, setItemsAll] = useState([]);
	// const [open, setOpen] = useState(false);
	// useEffect(() => {
	// 	!gifts && dispatch(weekOperation.giftsGetting());
	// }, [gifts]);
	const [menuHeight, setMenuHeight] = useState(0);
		useEffect(()=>{setMenuHeight(document.body.scrollHeight)})

	useEffect(() => !gifts && dispatch(weekOperation.giftsGetting()), [dispatch, gifts]);

	const summNumber = (id, checked) => {
		if (!checked) {
			setidItems(prev => [...prev, id._id]);
			setItemsAll(prev => [...prev, id]);
		}

		if (checked) {
			setidItems(idItems.filter(idItem => idItem !== id._id));
			setItemsAll(itemsAll.filter(idItem => idItem._id !== id._id));
		}
	};

	const handleSwitch = () => {
		const totalPriceOfAllGifts = itemsAll.reduce((acc, { price }) => acc + price, 0);

		if (balance < totalPriceOfAllGifts) {
			notification({
				type: 'warning',
				message: 'Не достаточно баллов для покупки выбранных подарков',
			});

			return;
		}

		if (itemsAll.length < 1) {
			notification({
				type: 'warning',
				message: 'Ничего не выбрано',
			});

			return;
		}

		dispatch(weekOperation.giftsOrder({ giftIDs: idItems }));
		setOpen(open => !open);
	};

	const awardsPage = true;

	return (
		<AwardsPageWrapper>
			<TopWrapper>
				<MyPrises>
					<PriseImg src="https://storage.googleapis.com/kidslikev2_bucket/83a4c25c9ace90241ba7b56424af7131.jpg" />
					<PriseText>МОИ ПРИЗЫ</PriseText>
				</MyPrises>

				<CurrentDay awardsPage={awardsPage} menuHeight={menuHeight} />
			</TopWrapper>

			<BlockPeopleTaskAwards>
				{gifts && gifts.map(item => <Card key={item._id} summNumber={summNumber} item={item} />)}
			</BlockPeopleTaskAwards>

			<NotificationContainer />

			<AwardsSubmitButton itemsAll={itemsAll} handleSwitch={handleSwitch} />

			{open && <CongratsModal itemsAll={itemsAll} setOpen={setOpen} />}
		</AwardsPageWrapper>
	);
}
