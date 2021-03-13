// import styled from 'styled-components';
// import { device } from '../../../index.styles';

// const LeftSide = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	flex-wrap: wrap;
// 	@media ${device.desktop} {
// 		width: 50%;
// 		display: block;
// 		&:last-child{margin-top: 30px}
// 	}
// `;

// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	flex-wrap: wrap-reverse;
// 	width: calc(100% - 150px);
// 	height: 40px;
// 	padding-top: 100px;
// 	@media ${device.desktop} {
// 		display: flex;
// 		justify-content: space-between;
// 		padding-top: 0px;
// 		margin-top: 40px;
// 		margin-left: 110px;
// 		margin-right: 50px;
// 		height: 67px;
// 	}
// `;

// const ProgressDiv = styled.div`
// 	width: 280px;
// `;

// const Points = styled.p`
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 12px;
// 	line-height: 15px;
// 	color: #a6abb9;
// 	letter-spacing: 0.04em;
// 	width: 100%;
// 	@media ${device.desktop} {
// 		text-align: start;
// 		display: block;
// 		line-height: 15px;
// 		&:last-child{margin-top: 10px;
// 		margin-bottom:6px}
// 		/* margin-top: 10px; */
// 	}
// `;

// const PointsContainer = styled.div`
// /* &:last-child{margin-top: 30px} */
// `

// const WeekPointsSpan =styled.span`
// font-weight: 700;
// color:rgba(0, 0, 0, 1);
// text-transform:uppercase
// `

// const WeekText = styled.p`
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 14px;
// 	line-height: 22px;
// 	margin-bottom: 15px;
// 	@media ${device.tablet} {
// 		font-size: 14px;
// 		display: none;
// 	}
// 	@media ${device.desktop} {
// 		font-size: 18px;
// 		display: block;
// 		margin-bottom:26px;
// 	}
// `;
// const Points_span = styled.span`
// 	font-size: 12px;
// 	color: black;
// 	font-family: Montserrat;
// 	font-weight: bold;
// 	display: block;
// 	margin-top: 4px;
// 	@media ${device.tablet} {
// 		text-align: start;
// 		padding-left: 20px;
// 		display: inline;
// 		line-height: 15px;
// 	}
// `;
// const Balance_Points = styled.p`
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 12px;
// 	line-height: 15px;
// 	color: #a6abb9;
// 	letter-spacing: 0.04em;
// 	width: 100%;
// 	@media ${device.desktop} {
// 		text-align: start;
// 		display: block;
// 		line-height: 15px;
// 	}
// `;
// const Balance_Points_span = styled.span`
// 	@media ${device.desktop} {
// 		margin-left: 10px;
// 		font-family: Montserrat;
// 		font-style: normal;
// 		font-weight: bold;
// 		font-size: 12px;
// 		line-height: 15px;
// 		letter-spacing: 0.2em;
// 		color: #000000;
// 	}
// `;
// const Balance_Points_leftNumb = styled.div`
// 	@media ${device.desktop} {
// 		margin-left: 10px;
// 		font-family: Montserrat;
// 		font-style: normal;
// 		font-weight: bold;
// 		font-size: 12px;
// 		line-height: 15px;
// 		letter-spacing: 0.2em;
// 		color: #000000;
// 	}
// `;

// export {
// 	Container,
// 	LeftSide,
// 	ProgressDiv,
// 	Points,
// 	WeekText,
// 	WeekPointsSpan,
// 	Points_span,
// 	Balance_Points,
// 	Balance_Points_span,
// 	Balance_Points_leftNumb,
// 	PointsContainer
// };

import styled from 'styled-components';
import { device } from '../../../index.styles';

// const LeftSide = styled.div`
// 	/* width: 100%; */
// 	display: flex;
// 	justify-content: center;
// 	// margin-left: 110px;
// 	/* @media ${device.mobile} {
// 		display: block;
// 		width: 100vw;
// 	} */
// `;
const LeftSide = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
	@media ${device.desktop} {
		height: 70px;
		width: 400px;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		text-align: right;
		margin-left: 60px;
	} ;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	margin-bottom: 40px;
	@media ${device.tablet} {
		flex-wrap: wrap-reverse;
		height: 100%;
		padding-top: 40px;
		margin-bottom: 40px;
	}
	@media ${device.desktop} {
		display: flex;
		justify-content: space-around;
		width: 100%;
	} ;
`;

const ProgressDiv = styled.div`
	width: 56%;

	@media ${device.tablet} {
		width: 280px;
		margin-right: 30px;
		display: inline-block;
	}

	@media ${device.desktop} {
		width: 280px;
		display: inline-block;
		margin-right: 10px;
	}
`;

const Points = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #a6abb9;
	letter-spacing: 0.04em;
	display: none;

	@media ${device.tablet} {
		width: 350px;
		display: block;
		margin-right: 10px;
	}
`;

const PointsLeft = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
	letter-spacing: 0.04em;
	width: 230px;
	text-align: center;
	margin-top: 20px;

	@media ${device.tablet} {
		width: 100%;
		text-align: center;
		// max-width: 768px;
		// width: 280px;
	}

	@media ${device.desktop} {
		width: 500px;
		text-align: left;
		margin-left: 0px;
		margin-top: 0px;
	}
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	width: 100%;
	text-align: center;
	@media ${device.tablet} {
		display: none;
	}

	@media ${device.desktop} {
		display: flex;
		width: 224px;
		font-size: 18px;
		line-height: 22px;
	}
`;

const DayName = styled.p`
	display: inline-block;
	margin: 0 auto;
	width: 100%;
	margin-top: 6px;
	color: #000000;
	font-family: 'Montserrat800', sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.2em;
	@media ${device.tablet} {
		width: 260px;
	}
`;

const PlanPoints = styled.p`
	display: inline-block;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	letter-spacing: 0.2em;
	padding-right: 19px;
	padding-left: 5px;
`;

const ProgressContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 58px;
	z-index: 1000;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: #f1f1f1;

	@media ${device.tablet} {
		background-color: unset;
		position: unset;
		height: 8px;
		justify-content: center;

		// max-width: 768px;

		// height: auto;
		// width: auto;
	}

	@media ${device.desktop} {
		justify-content: flex-end;
		width: 100%;
		// position: relative;
		// height: auto;
		// width: auto;
		// top: 0;
		// left: 0;
		// transform: translate(-2%);
		// display: flex;
		// align-items: center;
	}
`;

const ContainerPoints = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;

	@media ${device.tablet} {
		width: 100%;
		display: flex;
		text-align: center;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		height: 66px;
	}

	@media ${device.desktop} {
		width: 50%;
		height: 70px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		text-align: right;
	}
`;

const BoldPoints = styled.p`
	display: inline-block;
	color: #000000;
	font-family: 'Montserrat800', sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.2em;
	padding-left: 20px;
`;
const PointsMobile = styled.p`
	display: inline-block;
	width: 100%;
	height: 15px;
	padding-left: 20px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #a6abb9;
	@media ${device.tablet} {
		display: none;
	}
`;

const AddCustom = styled.div`
	@media ${device.tablet} {
		display: none;
	}
`;
const AddBtn = styled.button`
	position: fixed;
	margin-right: 20px;
	margin-bottom: 3px;
	z-index: 1110;
	bottom: 12px;
	right: 20px;
	border: none;
	background-color: unset;
`;

export {
	Container,
	LeftSide,
	ProgressDiv,
	Points,
	PointsLeft,
	WeekText,
	DayName,
	PlanPoints,
	ProgressContainer,
	ContainerPoints,
	BoldPoints,
	PointsMobile,
	AddCustom,
	AddBtn,
};
