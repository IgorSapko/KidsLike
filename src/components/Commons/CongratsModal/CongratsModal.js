import React from 'react';
import axios from 'axios';
// import itemBlock from '../AwardsPage/item.json';

// https://material-ui.com/ru/getting-started/installation/
import Modal from '@material-ui/core/Modal';

import { 
  AwardsSubmitData, 
  ImgCat, 
  Congrats, 
  BtnClose, 
  CongratsModal, 
  PrizesWrapper,
  PrizesWrapper_block,
  ChosenPrise,
  ChosenPrise_name } from './CongratsModal.module';


export default function ModalBackDrop({idItems,itemsAll}) {
  const [open, setOpen] = React.useState(false);

  const handleSwich= () => {
    setOpen(!open)

const giftId = {
  "giftIDs": idItems
}
console.log(giftId)

console.log('giftId',giftId)
    if(!open){
      axios
      .patch(`https://kids-like-backend-cloud.herokuapp.com/api/gift`, giftId)
      .then(({ data }) => console.log(data))
    }
  };




  const body = (
    <CongratsModal>
      <ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png"/>
      <Congrats>Поздравляем! Ты получаешь:</Congrats>
      <BtnClose onClick={handleSwich} src="https://i.ibb.co/dDhJBd5/BtnClose.jpg"></BtnClose>
      <PrizesWrapper>
      {itemsAll.map((item)=>{
          return(
            <PrizesWrapper_block>
                <ChosenPrise src={item.imageUrl} />
                <ChosenPrise_name>{item.title}</ChosenPrise_name>
            </PrizesWrapper_block> 
          )}
      )}
      </PrizesWrapper>
    </CongratsModal>
  );

  return (
    <div>
      <AwardsSubmitData onClick={handleSwich}>
      Подтвердить
      </AwardsSubmitData>
      <Modal
        open={open}
        onClose={handleSwich}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
