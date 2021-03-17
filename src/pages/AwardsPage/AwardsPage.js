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
	AwardsPageWrapper
} from './AwardsPage.styles';
import selector from '../../redux/selectors';
import weekOperation from '../../redux/week/weekOperation';
import CurrentDay from 'components/Commons/CurrentDay/CurrentDay';

export default function AwardsPage() {
	const gifts = useSelector(selector.getGifts);
	const dispatch = useDispatch();
	const [idItems, setidItems] = useState([]);
	const [itemsAll, setItemsAll] = useState([]);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		!gifts && dispatch(weekOperation.giftsGetting());
	}, [gifts]);
	const [menuHeight, setMenuHeight] = useState(0);
		useEffect(()=>{setMenuHeight(document.body.scrollHeight)})

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
	const handleSwich = async () => {
		setOpen(open => !open);
	};

	const awardsPage = true;

	return (
		<AwardsPageWrapper>
			<TopWrapper>
				<MyPrises>
					<PriseImg src="https://i.ibb.co/6YGGfkb/gift-box-1.jpg" />
					<PriseText>МОИ ПРИЗЫ</PriseText>
				</MyPrises>
				<CurrentDay awardsPage={awardsPage} menuHeight={menuHeight} />
			</TopWrapper>
			<BlockPeopleTaskAwards>
				{gifts &&
					gifts.map(item => {
						return <Card key={item._id} summNumber={summNumber} item={item} />;
					})}
			</BlockPeopleTaskAwards>
			<AwardsSubmitButton itemsAll={itemsAll} handleSwich={handleSwich} />
			{open && <CongratsModal itemsAll={itemsAll} idItems={idItems} setOpen={setOpen} />}
		</AwardsPageWrapper>
	);
}
