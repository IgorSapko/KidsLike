import styled, { css } from 'styled-components';
import { device } from '../../../index.styles';

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
			${props =>
			props.awardsPage &&
			css`
				display: none;
			`}
	} ;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	margin-bottom: 40px;
	@media ${device.tablet} {
		flex-wrap: wrap-reverse;
			height: fit-content;
		padding-top: 40px;
		margin-bottom: 40px;
	}
	@media ${device.desktop} {
		margin:0 auto;
		margin-bottom:50px;
		justify-content: space-around;
		flex-wrap:nowrap;
		width: 900px;
	} ;
`;

const ProgressDiv = styled.div`
	width: 50%;

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
		${props =>
			props.awardsPage &&
			css`
			display:none;
			
			`};
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
	right: 0;
	left: 0;
	/* bottom: 0; */
	top:${props => {
		console.log(props.menuHeight);
		return props.menuHeight+116;
	}}px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: #f1f1f1;
	margin-top:-116px;
	
	@media ${device.tablet} {
		background-color: unset;
		width:fit-content;
		position: static;
		height: 8px;
		margin-top:6px;
		${props =>
			props.awardsPage &&
			css`
				justify-content: flex-end;
				width:max-content;
				&>div{margin-right:10px;}
			`}
		
		
		/* justify-content: center; */

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
		/* display: flex; */
		text-align: center;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		height: 66px;
		${props =>
			props.awardsPage &&
			css`
			width: 350%;
		height: 70px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		text-align: right;
		/* ${props =>
			props.awardsPage &&
			css`
				width: 350%;
			`}; */
			`};
	}
	@media ${device.desktop} {
		width: 50%;
		height: 70px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		text-align: right;
		${props =>
			props.awardsPage &&
			css`
				width: 350%;
			`};
	}
`;

const BoldPoints = styled.span`
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
	/* bottom: 12px; */
	top:${props => {
		console.log(props.menuHeight);
		return props.menuHeight-10;
	}}px;
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
