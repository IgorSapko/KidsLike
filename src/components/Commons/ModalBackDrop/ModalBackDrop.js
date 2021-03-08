import React, {useRef, useEffect, useCallback} from 'react';
import axios from 'axios';

import { 
      ModalWrapper,
      ImgCat, 
      Congrats, 
      BtnClose, 
      ModalCongrats, 
      PrizesWrapper,
      PrizesWrapper_block,
      ChosenPrise,
      ChosenPrise_name } from '../CongratsModal/CongratsModal.module';

const ModalBackDrop = ({showModal, setShowModal}) => {
    // export default function ModalBackDrop({idItems,itemsAll}) - парметри, які приймались в попередній версії.
    const modalRef = useRef()

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    },[keyPress])


    // const giftId = {
    //     "giftIDs": idItems
    //   }
    //   console.log(giftId)
      
    //   console.log('giftId',giftId)
    //       if(!open){
    //         axios
    //         .patch(`https://kids-like-backend-cloud.herokuapp.com/api/gift`, giftId)
    //         .then(({ data }) => console.log(data))
    //       }
    //     };


    return(
        <>
        {showModal ? (
        <ModalWrapper ref={modalRef} onClick={closeModal}>
            <ModalCongrats showModal={showModal}>
                   <ImgCat src="https://i.ibb.co/p0wx9b1/SimonCat.png"/>
                   <Congrats>Поздравляем! Ты получаешь:</Congrats>
                   <BtnClose src="https://i.ibb.co/dDhJBd5/BtnClose.jpg" onClick={() => setShowModal(prev => !prev)}/>              
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
            </ModalCongrats>
        </ModalWrapper> 
        ) : null}
        </>
    )
}

export default  ModalBackDrop