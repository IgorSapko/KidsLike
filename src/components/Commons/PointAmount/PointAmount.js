//styles
import { BlockPeopleTask_item_inform_pad } from './PointAmount.module';

export default function PointAmount({ item }) {
	
	return (
		<BlockPeopleTask_item_inform_pad>
			{item.reward?item.reward < 2
				? `${item.reward} балл`
				: item.reward < 5 && item.reward > 1
				? `${item.reward} балла`
				: `${item.reward} баллов`:`${item.price} баллов`}
		</BlockPeopleTask_item_inform_pad>
	);
}
