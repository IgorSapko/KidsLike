import styled from 'styled-components';
import { device } from '../../../index.styles';

const LeftSide = styled.div`
	display: block;
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
		width: 68.6vw;
		margin-left: 8.5vw;
		margin-top: 40px;
	}
`;

const ProgressDiv = styled.div`
	width: 150px;

	@media ${device.tablet} {
		max-width: 768px;
		width: 280px;
		display: inline-block;
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

	@media ${device.tablet} {
		max-width: 768px;
		text-align: center;
		position: absolute;
		width: 280px;
		left: 42%;
		top: 259px;
	}

	@media ${device.desktop} {
		text-align: center;
		position: relative;
		left: -18px;
		top: 0;
	}
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	margin-bottom: 30px;
	position: absolute;

	@media ${device.tablet} {
		max-width: 768px;
		font-size: 14px;
		line-height: 17px;
		position: absolute;
		width: 172px;
		height: 17px;
		left: 94px;
		top: 89px;
	}

	@media ${device.desktop} {
		position: relative;
		width: 224px;
		font-size: 18px;
		line-height: 22px;
		margin-bottom: 30px;
		top: 0;
		left: 0;
	}
`;

const DayName = styled.p`
	display: inline-block;
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
	left: 0px;
	top: 95vh;
	margin-left: 20px;
	display: flex;
	align-items: center;

	@media ${device.tablet} {
		max-width: 768px;
		position: relative;
		display: flex;
		height: auto;
		width: auto;
		align-items: center;
		top: 0;
		left: 0;
	}

	@media ${device.desktop} {
		position: relative;
		height: auto;
		width: auto;
		top: 0;
		left: 0;
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
