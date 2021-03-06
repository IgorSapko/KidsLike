import React, { useState } from 'react';
import { AwardsSubmitBtn } from './AwardsSubmitButtonStyles';

export default function AwardsSubmitButton({ idItems, itemsAll, handleSwich }) {


	return <AwardsSubmitBtn onClick={()=>{itemsAll.length>0?handleSwich():alert('ничего  не выбрано')}}>Подтвердить</AwardsSubmitBtn>;
}
