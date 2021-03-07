import styled from 'styled-components';
import { device } from '../../../index.styles';

const LeftSide = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media ${device.desktop} {
		width: 50%;
		display: block;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap-reverse;
	width: calc(100% - 150px);
	height: 40px;
	padding-top: 100px;
	@media ${device.desktop} {
		display: flex;
		justify-content: space-between;
		padding-top: 0px;
		margin-top: 80px;
		margin-left: 110px;
		margin-right: 50px;
		height: 67px;
	}
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
	width: 100%;
	@media ${device.desktop} {
		text-align: start;
		display: block;
		line-height: 15px;
		margin-top: 30px;
	}
`;

const WeekText = styled.p`
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 15px;
	@media ${device.tablet} {
		font-size: 12px;
		display: none;
	}
	@media ${device.desktop} {
		font-size: 18px;
		display: inline;
	}
`;
const Points_span = styled.span`
	font-size: 12px;
	color: black;
	font-family: Montserrat;
	font-weight: bold;
	display: block;
	margin-top: 4px;
	@media ${device.tablet} {
		text-align: start;
		padding-left: 20px;
		display: inline;
		line-height: 15px;
	}
`;
const Balance_Points = styled.p`
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #a6abb9;
	letter-spacing: 0.04em;
	width: 100%;
	@media ${device.desktop} {
		text-align: start;
		display: block;
		line-height: 15px;
	}
`;
const Balance_Points_span = styled.span`
	@media ${device.desktop} {
		margin-left: 10px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.2em;
		color: #000000;
	}
`;
const Balance_Points_leftNumb = styled.div`
	@media ${device.desktop} {
		margin-left: 10px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.2em;
		color: #000000;
	}
`;

export {
	Container,
	LeftSide,
	ProgressDiv,
	Points,
	WeekText,
	Points_span,
	Balance_Points,
	Balance_Points_span,
	Balance_Points_leftNumb,
};

// import styled from 'styled-components';
// import { device } from '../../../index.styles';

// const LeftSide = styled.div`
// 	display: block;
// `;

// const Container = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	width: 880px;
// 	height: 70px;
// 	margin-left: 110px;
// 	margin-top: 40px;
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
// `;

// const WeekText = styled.p`
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 18px;
// 	line-height: 22px;
// `;

// export { Container, LeftSide, ProgressDiv, Points, WeekText };
