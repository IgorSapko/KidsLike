import React from 'react';

import { PointsBlock, TextLabel, PointsLabel } from './planningPoints.styles';

const PlanningPoints = ({points}) => {
    return (
			<PointsBlock>
				<TextLabel>Определены задачи</TextLabel>
				<PointsLabel>{points}</PointsLabel>
				<TextLabel>на баллов</TextLabel>
			</PointsBlock>
		);
}
export default PlanningPoints


