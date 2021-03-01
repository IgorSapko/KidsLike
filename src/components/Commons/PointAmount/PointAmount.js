//styles
import { BlockPeopleTask_item_inform_pad } from './PointAmount.module';

export default function PointAmount({ item }) {
<<<<<<< HEAD
	return <BlockPeopleTask_item_inform_pad>{item.reward} Балла</BlockPeopleTask_item_inform_pad>;
=======
	return (
		<BlockPeopleTask_item_inform_pad>
			{item.reward < 2
				? `${item.reward} балл`
				: item.reward < 5 && item.reward > 1
				? `${item.reward} балла`
				: `${item.reward} баллов`}
		</BlockPeopleTask_item_inform_pad>
	);
>>>>>>> 4e4b76e7db47c45239b07278c3ae23197a8ab57f
}
