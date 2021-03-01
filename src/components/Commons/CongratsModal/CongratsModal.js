import React from 'react';

import itemBlock from '../AwardsPage/item.json';

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


export default function ModalBackDrop() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <CongratsModal>
      <ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png"/>
      <Congrats>Поздравляем! Ты получаешь:</Congrats>
      <BtnClose onClick={handleClose} src="https://i.ibb.co/dDhJBd5/BtnClose.jpg"></BtnClose>
      <PrizesWrapper>
      {itemBlock.map((item)=>{
          return(
            <PrizesWrapper_block>
                <ChosenPrise src={item.img} />
                <ChosenPrise_name src={item.title} />
            </PrizesWrapper_block> 
          )}
      )}
      </PrizesWrapper>
    </CongratsModal>
  );

  return (
    <div>
      <AwardsSubmitData onClick={handleOpen}>
      Подтвердить
      </AwardsSubmitData>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
