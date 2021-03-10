import styled from 'styled-components';
import { device, size } from '../../../index.styles';
export const WeekTabContentList = styled.div`
	display: flex;
	justify-content: center;
`;
// export const WeekTabContentList = styled.div`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	padding: 0px;
// 	margin-top: 200px;
// 	@media ${device.tablet} {
// 		display: inline-block;
// 		margin-left: 110px;
// 		padding: 0px;
// 		margin-top: 200px;
// 	}
// 	@media ${device.desktop} {
// 		display: inline-block;
// 		margin-left: 110px;
// 		padding: 0px;
// 		margin-top: 40px;
// 	}
// `;
export const WeekTabContentPlanning = styled.div`
	margin: 0 auto;
	width: 300px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 70px;
	font-weight: 700;
	font-size: 12px;
`;

export const WeekTabContentPlanningLink = styled.div`
	background-color: #ffbc33;
	color: white;
	padding: 15px 33px;
	border-radius: 5px;
	text-decoration: none;
`;

export const WeekTabContentImage = styled.div`
	background-image: url('../../img/kidsLikeMainPageMobile.png');
	// width: 100%;
	// height: 362px;
	// margin: 0px;
	// padding: 0px;
	// margin-top: 2%;
	@media ${device.tablet} {
		background-image: url('../../img/kidsInMainPage.png');
	}
`;
