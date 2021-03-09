import React from 'react';
import { PointsBlock, TextLabel, TextLabelPoints, PointsLabel } from './planningPoints.styles';

const PlanningPoints = ({ points }) => {
	return (
		<PointsBlock>
			<TextLabel>Определены задачи на</TextLabel>
			<PointsLabel>{points}</PointsLabel>
			<TextLabelPoints>баллов</TextLabelPoints>
		</PointsBlock>
	);
};
export default PlanningPoints;
