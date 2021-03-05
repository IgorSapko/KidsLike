import styled from 'styled-components';
import { device } from '../../../index.styles';

const LeftSide = styled.div`
	display: block;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 880px;
	height: 70px;
	margin-left: 110px;
	margin-top: 40px;
`;

const ProgressDiv = styled.div`
	width: 280px;
	display: inline-block;
`;

const Points = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #a6abb9;
	letter-spacing: 0.04em;
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	margin-bottom: 30px;
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
`;

const ProgressContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ContainerPoints = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
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
	WeekText,
	DayName,
	PlanPoints,
	ProgressContainer,
	ContainerPoints,
	BoldPoints,
};
