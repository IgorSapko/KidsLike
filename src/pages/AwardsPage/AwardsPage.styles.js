import styled from 'styled-components';
import { device } from '../../index.styles';

export const AwardsPageWrapper = styled.div`
	background: #ffffff;
	@media ${device.tablet} {
		background: #fafafa;
		width: 100%;
		padding-bottom: 1px;
	}
	@media ${device.desktop} {
		display: block;
		overflow: auto;
		height: calc(100% - 142px);
	} ;
`;

export const BlockPeopleTaskAwards = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0px;
	margin-bottom: 20px;
	width: 300px;
	margin: 0 auto;
	min-height: fit-content;
	@media ${device.tablet} {
		justify-content: start;
		min-width: 600px;
		padding: 0px;
	}
	@media ${device.desktop} {
		width: 1200px;
		padding: 0px;
		margin-top: 0px;
	}
`;

export const TopWrapper = styled.div`
	margin: 0 auto;
	width: 300px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* width: fit-content; */
	@media ${device.tablet} {
		width: 600px;
	}
	@media ${device.desktop} {
		width: 1200px;
	}
`;

export const MyPrises = styled.div`
	display: flex;
	align-items: center;
	width: 217px;
	height: 26px;
	margin-left: -20px;

	@media ${device.tablet} {
		margin-left: 0;
	}
	@media ${device.desktop} {
		margin-left: -22px;
	}
`;

export const PriseImg = styled.img`
	width: 26px;
	height: 26px;
	margin-right: 14px;
`;

export const PriseText = styled.p`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	letter-spacing: 0.2em;
	color: #000000;
`;

export const ProgressBlock = styled.div`
	width: 349px;
	height: 67px;
`;
