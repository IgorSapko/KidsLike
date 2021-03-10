import styled from 'styled-components';

// import {device} from '../../../index.styles';
import device from '../../../pages/PlanningPage/device'
const PointsBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	@media ${device.mobile} {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #f1f1f1;
		z-index:100;
		height: 58px;
		width:100%;
	}
	@media ${device.tablet} {
		position: inherit;
		background-color: inherit;
	}
`;

const TextLabel = styled.p`
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
	@media ${device.mobile} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;
const TextLabelPoints = styled.p`
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
	@media ${device.mobile} {
		text-transform: uppercase;
	}
	@media ${device.tablet} {
		text-transform: none;
	}
`;

const PointsLabel = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	text-align: center;
	line-height: 30px;
	/* font-weight: bold; */
	font-weight: 700;
	font-size: 14px;
	color: #ffffff;
	background-color: #8ec63f;
	margin: 0px 7px 0px 7px;
`;

export { PointsBlock, TextLabel, TextLabelPoints, PointsLabel };

// import styled from 'styled-components';

// import {device} from '../../../index.styles';

// const PointsBlock = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content:center;
// 	@media ${device.mobile} {
// 		position: fixed;
// 		bottom: 0;
// 		left: 0;
// 		background-color: #f1f1f1;
// 		z-index:100;
// 		height: 58px;
// 		width:100%;
// 	}
// 	@media ${device.tablet} {
// 		position: inherit;
// 		background-color: inherit;
// 	}
// `;

// const TextLabel = styled.p`
// 	font-weight: 500;
// 	font-size: 12px;
// 	color: #a6abb9;
// 	@media ${device.mobile} {
// 		display: none;
// 	}
// 	@media ${device.tablet} {
// 		display: block;
// 	}
// `;
// const TextLabelPoints = styled.p`
// 	font-weight: 500;
// 	font-size: 12px;
// 	color: #a6abb9;
// 	@media ${device.mobile} {
// 		text-transform: uppercase;
// 	}
// 	@media ${device.tablet} {
// 		text-transform: none;
// 	}
// `;

// const PointsLabel = styled.div`
// 	width: 30px;
// 	height: 30px;
// 	border-radius: 15px;
// 	text-align: center;
// 	line-height: 30px;
// 	/* font-weight: bold; */
// 	font-weight: 700;
// 	font-size: 14px;
// 	color: #ffffff;
// 	background-color: #8ec63f;
// 	margin: 0px 7px 0px 7px;
// `;

// export { PointsBlock, TextLabel, TextLabelPoints, PointsLabel };
