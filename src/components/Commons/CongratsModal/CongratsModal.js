import React, { useState } from 'react';
import { AwardsSubmitData } from './CongratsModal.module';

import ModalBackDrop from '../ModalBackDrop/ModalBackDrop';

  function CongratsModal() {
  const [showModal, setShowModal] = useState(false)

const openModal = () => {
  setShowModal(prev => !prev)
}

  return (
    <div>
      <AwardsSubmitData onClick={openModal}>Подтвердить</AwardsSubmitData>
      <ModalBackDrop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default CongratsModal;