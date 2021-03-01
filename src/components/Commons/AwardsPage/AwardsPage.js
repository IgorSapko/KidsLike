import { BlockPeopleTask_Awards } from './AwardsPage.module';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

import ModalBackDrop from '../CongratsModal/CongratsModal'



export default function AwardsPage() {
	const [count, setCount] = useState([]);
	const [idItems, setidItems] = useState([]);
	const [itemsAll, setItemsAll] = useState([]);


	useEffect(() => {
			axios
				.get(`https://kids-like-backend-cloud.herokuapp.com/api/gift`)
				.then(({ data }) => {setCount(data.gifts)
				})
	  },[]);

const summNumber=(id, checked)=>{
	if(!checked){
		setidItems(prev=>[...prev,id._id])
		setItemsAll(prev=>[...prev,id])
	}
	if(checked){
		
		setidItems(idItems.filter((idItem)=>idItem !==id._id ))
		setidItems(itemsAll.filter((idItem)=>idItem._id !==id._id ))
	}




}
console.log(itemsAll)

console.log(idItems)
	return (
		<div>
		<BlockPeopleTask_Awards>
			{count.map(item => {
				return <Card summNumber={summNumber} item={item} />;
			})}
		</BlockPeopleTask_Awards>


		<ModalBackDrop itemsAll={itemsAll} idItems={idItems} />
		</div>
	);
}