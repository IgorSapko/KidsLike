//styles
import { BlockPeopleTask_item_inform_pad } from './PointAmount.module';

export default function PointAmount({ item }) {
	return <BlockPeopleTask_item_inform_pad>{item.reward} Балла</BlockPeopleTask_item_inform_pad>;
}
