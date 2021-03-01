import { BlockPeopleTask_Awards } from './AwardsPage.module';

import Card from '../Card/Card';

import ModalBackDrop from '../CongratsModal/CongratsModal'

import itemBlock from './item.json';

export default function AwardsPage() {
	const props = {};
	return (
		<div>
		<BlockPeopleTask_Awards>
			{itemBlock.map(item => {
				return <Card item={item} />;
			})}
		</BlockPeopleTask_Awards>
		<ModalBackDrop {...props} />
		</div>
	);
}