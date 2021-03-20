import { BlockPeopleTaskItemInformPad } from './PointAmount.module';

export default function PointAmount({ item }) {
	
	return (
		<BlockPeopleTaskItemInformPad>
			{item.reward?item.reward < 2
				? `${item.reward} балл`
				: item.reward < 5 && item.reward > 1
				? `${item.reward} балла`
				: `${item.reward} баллов`:`${item.price} баллов`}
		</BlockPeopleTaskItemInformPad>
	);
}
