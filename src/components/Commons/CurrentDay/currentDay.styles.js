import styled from 'styled-components';
import { device } from '../../../index.styles';

const LeftSide = styled.div``;

const Container = styled.div`
	@madia ${device.desktop} {
		display: flex;
		justify-content: space-between;
		width: 1080px;
	}
`;

const ProgressDiv = styled.div`
	width: 150px;
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
