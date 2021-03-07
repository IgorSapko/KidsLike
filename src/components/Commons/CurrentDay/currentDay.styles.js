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
`;

const Points = styled.p`
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #a6abb9;
	letter-spacing: 0.04em;
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
`;

export { Container, LeftSide, ProgressDiv, Points, WeekText };
