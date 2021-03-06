import React, {useState} from 'react';
import axios from 'axios';

// https://material-ui.com/ru/getting-started/installation/
import Modal from '@material-ui/core/Modal';

import { 
   
  ImgCat, 
  Congrats, 
  BtnClose, 
  CongratsModalWrapper, 
  PrizesWrapper,
  PrizesWrapper_block,
  ChosenPrise,
  ChosenPrise_name } from './CongratsModal.module';


export default function CongratsModal({idItems,itemsAll}) {
  const [open, setOpen] = useState(true);

  const handleSwich= () => {
    setOpen(!open)

const giftId = {
  "giftIDs": idItems
}
console.log(giftId)


    if(open){
      axios
      .patch(`https://kids-like-backend-cloud.herokuapp.com/api/gift`, giftId)
      .then(({ data }) => console.log(data))
    }
  };

  const body = (
    <CongratsModalWrapper>
      <ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png"/>
      <Congrats>Поздравляем! Ты получаешь:</Congrats>
      <BtnClose onClick={handleSwich} src="https://i.ibb.co/dDhJBd5/BtnClose.jpg"></BtnClose>
      <PrizesWrapper>
      {itemsAll.map((item)=>{
          return(
            <PrizesWrapper_block key={item.imageUrl}>
                <ChosenPrise src={item.imageUrl} />
                <ChosenPrise_name>{item.title}</ChosenPrise_name>
            </PrizesWrapper_block> 
          )}
      )}
      </PrizesWrapper>
    </CongratsModalWrapper>
  );

  return (
    <div>
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












// import React, {useState} from 'react';
// import axios from 'axios';

// // https://material-ui.com/ru/getting-started/installation/
// import Modal from '@material-ui/core/Modal';

// import { 
//   AwardsSubmitButton, 
//   ImgCat, 
//   Congrats, 
//   BtnClose, 
//   CongratsModalWrapper, 
//   PrizesWrapper,
//   PrizesWrapper_block,
//   ChosenPrise,
//   ChosenPrise_name } from './CongratsModal.module';


// export default function CongratsModal({idItems,itemsAll}) {
//   const [open, setOpen] = useState(false);

//   const handleSwich= () => {
//     setOpen(!open)

// const giftId = {
//   "giftIDs": idItems
// }
// console.log(giftId)

// console.log('giftId',giftId)
//     if(!open){
//       axios
//       .patch(`https://kids-like-backend-cloud.herokuapp.com/api/gift`, giftId)
//       .then(({ data }) => console.log(data))
//     }
//   };

//   const body = (
//     <CongratsModalWrapper>
//       <ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png"/>
//       <Congrats>Поздравляем! Ты получаешь:</Congrats>
//       <BtnClose onClick={handleSwich} src="https://i.ibb.co/dDhJBd5/BtnClose.jpg"></BtnClose>
//       <PrizesWrapper>
//       {itemsAll.map((item)=>{
//           return(
//             <PrizesWrapper_block key={item.imageUrl}>
//                 <ChosenPrise src={item.imageUrl} />
//                 <ChosenPrise_name>{item.title}</ChosenPrise_name>
//             </PrizesWrapper_block> 
//           )}
//       )}
//       </PrizesWrapper>
//     </CongratsModalWrapper>
//   );

//   return (
//     <div>
//       <AwardsSubmitButton onClick={handleSwich}>
//       Подтвердить
//       </AwardsSubmitButton>
//       <Modal
//         open={open}
//         onClose={handleSwich}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }
