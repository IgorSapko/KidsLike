import style from './style.module.css';
import itemBlock from './item.json';
import SelectDays from '../SelectDays/SelectDays';
import { useState } from 'react';
export default function Stateless() {
	const [numberSelect, setNumberSelect] = useState([]);

	const numberselectds = name => {
		const parsename = parseInt(name);

		setNumberSelect([...numberSelect, parsename]);
	};
	console.log(numberSelect);
	return (
		<div className={style.blockPeopleTask}>
			{itemBlock.map(item => {
				return (
					<div key={item.img} className={style.blockPeopleTask_item}>
						<div className={style.blockPeopleTask_item_img}>
							<img src={item.img} />
						</div>

						<div className={style.blockPeopleTask_item_text}>
							<h2>{item.title}</h2>
							<div className={style.blockPeopleTask_item_inform}>
								<p onClick={() => numberselectds(item.ball)}>{item.ball}</p>
								<SelectDays />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
