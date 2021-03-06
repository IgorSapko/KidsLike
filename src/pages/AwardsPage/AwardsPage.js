import { BlockPeopleTask_Awards } from './AwardsPage.module';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../../components/Commons/Card/Card';
import AwardsSubmitButton from '../../components/Commons/AwardsSubmitButton/AwardsSubmitButton';

import CongratsModal from '../../components/Commons/CongratsModal/CongratsModal';

export default function AwardsPage() {
	const [count, setCount] = useState([]);
	const [idItems, setidItems] = useState([]);
	const [itemsAll, setItemsAll] = useState([]);

	useEffect(() => {
		axios.get(`https://kids-like-backend-cloud.herokuapp.com/api/gift`).then(({ data }) => {
			setCount([...data.gifts]);
		});
	}, []);

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

	const [open, setOpen] = useState(false);

	const handleSwich = () => {
		setOpen(!open);

	};

	return (
		count && (
			<div>
				<BlockPeopleTask_Awards>
					{count.map(item => {
						return <Card key={item._id} summNumber={summNumber} item={item} />;
					})}
				</BlockPeopleTask_Awards>
				<AwardsSubmitButton idItems={idItems} itemsAll={itemsAll} handleSwich={handleSwich} />
				{open&&
				<CongratsModal itemsAll={itemsAll} idItems={idItems} />}
			</div>
		)
	);
}
