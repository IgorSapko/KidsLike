// import styled from 'styled-components';
// import { device } from '../../../index.styles';

// const LeftSide = styled.div`
// 	/* width: 100%; */
// 	display: flex;
// 	justify-content: center;
// 	margin-left: 110px;
// 	/* @media ${device.mobile} {
// 		display: block;
// 		width: 100vw;
// 	} */
// `;

// const Container = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	// width: 880px;
// 	height: 70px;
// 	// margin-left: 110px;
// 	// margin-top: 40px;

// 	@media ${device.desktop} {
// 		display: flex;
// 		justify-content: space-between;
// 		width: 100%;
// 		/* margin-left: 8.5vw; */
// 		margin-top: 40px;
// 	} ;
// `;

// const ProgressDiv = styled.div`
// 	width: 150px;

// 	@media ${device.tablet} {
// 		max-width: 768px;
// 		width: 280px;
// 		display: inline-block;
// 		/* margin-bottom:40px; */
// 	}

// 	@media ${device.desktop} {
// 		width: 280px;
// 		display: inline-block;
// 	}
// `;

// const Points = styled.p`
// 	font-family: 'MontserratRegular', sans-serif;
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 12px;
// 	line-height: 15px;
// 	color: #a6abb9;
// 	letter-spacing: 0.04em;
// 	display: none;

// 	@media ${device.tablet} {
// 		width: 350px;
// 		display: block;
// 		margin-right: 10px;
// 	}
// `;

// const PointsLeft = styled.p`
// 	font-family: 'MontserratRegular', sans-serif;
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 12px;
// 	line-height: 15px;
// 	color: #a6abb9;
// 	letter-spacing: 0.04em;
// 	position: absolute;
// 	width: 177px;
// 	text-align: center;
// 	margin-top: 50px;

// 	@media ${device.tablet} {
// 		max-width: 768px;
// 		text-align: center;
// 		position: absolute;
// 		width: 280px;
// 		left: 38%;
// 		top: 210px;
// 	}

// 	@media ${device.desktop} {
// 		width: 100%;
// 		text-align: left;
// 		position: relative;
// 		top: 0;
// 		left: 0px;
// 		margin-left: 0px;
// 		transform: translate(-10%);
// 	}
// `;

// const WeekText = styled.p`
// 	font-family: 'MontserratRegular', sans-serif;
// 	font-style: normal;
// 	font-weight: 500;
// 	margin-bottom: 30px;
// 	position: absolute;

// 	/* 	
// 	margin-left:150px; */

// 	@media ${device.tablet} {
// 		display: none;
// 		/* max-width: 768px;
// 		font-size: 14px;
// 		line-height: 17px;
// 		position: absolute;
// 		width: 172px;
// 		height: 17px;
// 		left: 94px;
// 		top: 89px; */
// 	}

// 	@media ${device.desktop} {
// 		position: relative;
// 		width: 224px;
// 		font-size: 18px;
// 		line-height: 22px;
// 		margin-bottom: 30px;
// 		top: 0;
// 		left: 0;
// 		/* margin-left:20px */
// 	}
// `;

// const DayName = styled.p`
// 	display: inline-block;
// 	margin: 0 auto;
// 	width: 200px;
// 	margin-top: 6px;
// 	color: #000000;
// 	font-family: 'Montserrat800', sans-serif;
// 	font-style: normal;
// 	font-weight: 800;
// 	font-size: 12px;
// 	line-height: 15px;
// 	letter-spacing: 0.2em;
// `;

// const PlanPoints = styled.p`
// 	display: inline-block;
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: normal;
// 	font-size: 14px;
// 	line-height: 17px;
// 	text-align: right;
// 	letter-spacing: 0.2em;
// 	padding-right: 19px;
// 	padding-left: 5px;
// `;

// const ProgressContainer = styled.div`
// 	position: absolute;
// 	width: 320px;
// 	height: 58px;

// 	transform: translate(-100%, 50%);
// 	/* left: 0px; */
// 	top: 130vh;
// 	margin-left: 20px;
// 	display: flex;
// 	align-items: center;

// 	@media ${device.tablet} {
// 		max-width: 768px;
// 		position: relative;
// 		display: flex;
// 		height: auto;
// 		width: auto;
// 		justify-content: center;
// 		align-items: center;
// 		top: 0;
// 		left: 0;
// 		transform: translate(10%);
// 	}

// 	@media ${device.desktop} {
// 		position: relative;
// 		height: auto;
// 		width: auto;
// 		top: 0;
// 		left: 0;
// 		transform: translate(-2%);
// 		display: flex;
// 		align-items: center;
// 	}
// `;

// const ContainerPoints = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	align-items: flex-end;

// 	@media ${device.tablet} {
// 		max-width: 768px;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: space-between;
// 		align-items: flex-end;
// 		text-align: center;
// 		position: absolute;
// 		width: 233px;
// 		height: 70px;
// 		left: 50%;
// 		top: 172px;
// 	}

// 	@media ${device.desktop} {
// 		height: 70px;
// 		position: relative;
// 		top: 0;
// 		left: 0;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: space-between;
// 		align-items: flex-end;
// 		text-align: right;
// 	}
// `;

// const BoldPoints = styled.p`
// 	display: inline-block;
// 	color: #000000;
// 	font-family: 'Montserrat800', sans-serif;
// 	font-style: normal;
// 	font-weight: 800;
// 	font-size: 14px;
// 	line-height: 17px;
// 	letter-spacing: 0.2em;
// 	padding-left: 14px;
// `;

// export {
// 	Container,
// 	LeftSide,
// 	ProgressDiv,
// 	Points,
// 	PointsLeft,
// 	WeekText,
// 	DayName,
// 	PlanPoints,
// 	ProgressContainer,
// 	ContainerPoints,
// 	BoldPoints,
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