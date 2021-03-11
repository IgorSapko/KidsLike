// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Card from '../../components/Commons/Card/Card';
// import AwardsSubmitButton from '../../components/Commons/AwardsSubmitButton/AwardsSubmitButton';
// import CongratsModal from '../../components/Commons/CongratsModal/CongratsModal';
// import { BlockPeopleTask_Awards } from './AwardsPage.styles';
// import selector from '../../redux/selectors';
// import weekOperation from '../../redux/week/weekOperation';

// export default function AwardsPage() {
// 	const gifts = useSelector(selector.getGifts);
// 	const dispatch = useDispatch();
// 	const [idItems, setidItems] = useState([]);
// 	const [itemsAll, setItemsAll] = useState([]);
// 	const [open, setOpen] = useState(false);
// 	useEffect(() => {
// 		!gifts && dispatch(weekOperation.giftsGetting());
// 	}, [gifts]);

// 	const summNumber = (id, checked) => {
// 		if (!checked) {
// 			setidItems(prev => [...prev, id._id]);
// 			setItemsAll(prev => [...prev, id]);
// 		}
// 		if (checked) {
// 			setidItems(idItems.filter(idItem => idItem !== id._id));
// 			setItemsAll(itemsAll.filter(idItem => idItem._id !== id._id));
// 		}
// 	};
// 	console.log('open', open);
// 	const handleSwich = async () => {
// 		setOpen(open => !open);
// 	};

// 	return (
// 		<div>
// 			<BlockPeopleTask_Awards>
// 				{gifts &&
// 					gifts.map(item => {
// 						return <Card key={item._id} summNumber={summNumber} item={item} />;
// 					})}
// 			</BlockPeopleTask_Awards>
// 			<AwardsSubmitButton itemsAll={itemsAll} handleSwich={handleSwich} />
// 			{open && <CongratsModal itemsAll={itemsAll} idItems={idItems} setOpen={setOpen} />}
// 		</div>
// 	);
// }
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Commons/Card/Card';
import AwardsSubmitButton from '../../components/Commons/AwardsSubmitButton/AwardsSubmitButton';
import CongratsModal from '../../components/Commons/CongratsModal/CongratsModal';
import { BlockPeopleTask_Awards, TopWrapper, MyPrises, Prise_img, Prise_text, ProgressBlock } from './AwardsPage.styles';
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
	console.log('open', open);
	const handleSwich = async () => {
		setOpen(open => !open);
	};
	
	return (
		<div>
			<TopWrapper>
			    <MyPrises> 
				   <Prise_img src="https://i.ibb.co/6YGGfkb/gift-box-1.jpg"/>
				   <Prise_text>МОИ ПРИЗЫ</Prise_text>
			    </MyPrises>
			    <ProgressBlock>
			            <CurrentDay />
			    </ProgressBlock>
		    </TopWrapper>
			<BlockPeopleTask_Awards>
				{gifts &&
					gifts.map(item => {
						return <Card key={item._id} summNumber={summNumber} item={item} />;
					})}
			</BlockPeopleTask_Awards>
			<AwardsSubmitButton itemsAll={itemsAll} handleSwich={handleSwich} />
			{open && <CongratsModal itemsAll={itemsAll} idItems={idItems} setOpen={setOpen} />}
		</div>
	);
}