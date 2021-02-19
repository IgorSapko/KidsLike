//styles
import {
	BlockPeopleTask,
	BlockPeopleTask_item,
	BlockPeopleTask_item_img,
	BlockPeopleTask_item_inform,
	BlockPeopleTask_item_inform_pad,
	BlockPeopleTask_item_inform_title,
	BlockPeopleTask_item_text,
} from './Card.modules';

//toggle buttom
import TaskToggle from '../Card/TaskToggle/TaskToggle';

//json file
import itemBlock from './item.json';

export default function Stateless() {
	return (
		<BlockPeopleTask>
			{itemBlock.map(item => {
				return (
					<BlockPeopleTask_item key={item.img}>
						<BlockPeopleTask_item_img>
							<img src={item.img} />
						</BlockPeopleTask_item_img>

						<BlockPeopleTask_item_text>
							<BlockPeopleTask_item_inform_title>{item.title}</BlockPeopleTask_item_inform_title>
							<BlockPeopleTask_item_inform>
								<BlockPeopleTask_item_inform_pad>{item.ball}</BlockPeopleTask_item_inform_pad>
								<TaskToggle />
							</BlockPeopleTask_item_inform>
						</BlockPeopleTask_item_text>
					</BlockPeopleTask_item>
				);
			})}
		</BlockPeopleTask>
	);
}
