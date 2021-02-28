import React, { useState, useEffect } from 'react';

//styles
import style from './style.module.css';

//json
import jsonItem from './item.json'



export default function ModalBackDrop() {
	// const [numberSelect, setNumberSelect] = useState('0');



	return (
        <div className={style.cover}>
        <div className={style.slider}>
      <img src='https://i.ibb.co/j858pvs/4-1.png'/>
      <h2>
      Поздравляем! Ты получаешь:
      </h2>
<div className={style.vrapblock}>
      {jsonItem.map((item)=>{
          return( <div > 
            <div className={style.imgVrap}>
                <img src={item.img}/>
                
                </div> 
             
       </div>)
         
      })}
      </div>




      </div>
      </div>
	);
}
