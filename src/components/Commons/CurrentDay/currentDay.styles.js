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

const LeftSide = styled.div`
	/* width: 100%; */
	display: flex;
	justify-content: center;
	margin-left: 110px;
	/* @media ${device.mobile} {
		display: block;
		width: 100vw;
	} */
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	// width: 880px;
	height: 70px;
	// margin-left: 110px;
	// margin-top: 40px;

	@media ${device.desktop} {
		display: flex;
		justify-content: space-between;
		width: 100%;
		/* margin-left: 8.5vw; */
		margin-top: 40px;
	} ;
`;

const ProgressDiv = styled.div`
	width: 150px;

	@media ${device.tablet} {
		max-width: 768px;
		width: 280px;
		display: inline-block;
		/* margin-bottom:40px; */
	}

	@media ${device.desktop} {
		width: 280px;
		display: inline-block;
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
	line-height: 15px;
	color: #a6abb9;
	letter-spacing: 0.04em;
	position: absolute;
	width: 177px;
	text-align: center;
	margin-top: 50px;

	@media ${device.tablet} {
		max-width: 768px;
		text-align: center;
		position: absolute;
		width: 280px;
		left: 38%;
		top: 210px;
	}

	@media ${device.desktop} {
		width: 100%;
		text-align: left;
		position: relative;
		top: 0;
		left: 0px;
		margin-left: 0px;
		transform: translate(-10%);
	}
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	margin-bottom: 30px;
	position: absolute;

	/* 	
	margin-left:150px; */

	@media ${device.tablet} {
		display: none;
		/* max-width: 768px;
		font-size: 14px;
		line-height: 17px;
		position: absolute;
		width: 172px;
		height: 17px;
		left: 94px;
		top: 89px; */
	}

	@media ${device.desktop} {
		position: relative;
		width: 224px;
		font-size: 18px;
		line-height: 22px;
		margin-bottom: 30px;
		top: 0;
		left: 0;
		/* margin-left:20px */
	}
`;

const DayName = styled.p`
	display: inline-block;
	margin: 0 auto;
	width: 200px;
	margin-top: 6px;
	color: #000000;
	font-family: 'Montserrat800', sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.2em;
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
	position: absolute;
	width: 320px;
	height: 58px;

	transform: translate(-100%, 50%);
	/* left: 0px; */
	top: 130vh;
	margin-left: 20px;
	display: flex;
	align-items: center;

	@media ${device.tablet} {
		max-width: 768px;
		position: relative;
		display: flex;
		height: auto;
		width: auto;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		transform: translate(10%);
	}

	@media ${device.desktop} {
		position: relative;
		height: auto;
		width: auto;
		top: 0;
		left: 0;
		transform: translate(-2%);
		display: flex;
		align-items: center;
	}
`;

const ContainerPoints = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;

	@media ${device.tablet} {
		max-width: 768px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		text-align: center;
		position: absolute;
		width: 233px;
		height: 70px;
		left: 50%;
		top: 172px;
	}

	@media ${device.desktop} {
		height: 70px;
		position: relative;
		top: 0;
		left: 0;
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
	padding-left: 14px;
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
};
