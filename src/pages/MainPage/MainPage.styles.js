import styled from 'styled-components';
import { device, size } from '../../index.styles';

const MainPageContainer = styled.div`
	@media (max-width: ${size.desktop}) {
		display: block;
	}
	@media ${device.desktop} {
		display: flex;
	}
`;
const WeekTabsContainer = styled.div`
	background-color: none;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 60px;
	padding-right: 20px;
	padding-left: 20px;
	@media (min-width: ${size.tablet}) {
		background-color: #ffbc33;
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	@media ${device.desktop} {
		height: calc(100% + 80px);
		width: 240px;
		align-items: start;
		z-index: 1;
		left: 0;
	}
`;
const WeekTabsList = styled.ul`
	@media (max-width: 1279px) {
		list-style: none;
		display: flex;
		justify-content: space-between;
		width: 336px;
		margin-left: 0px;
	}
	@media ${device.tablet} {
		border-color: red;
	}
	@media ${device.desktop} {
		list-style: none;
		margin-top: 140px;
		margin-left: 50px;
		padding-left: 0px;
	}

	/* list-style: none;
		display: flex;
		justify-content: space-between;
		width: 336px;
		margin-left: 0px;
	
	@media ${device.tablet} {
		border-color: red;
	}
	@media ${device.desktop} {
		list-style: none;
		margin-top: 140px;
		margin-left: 50px;
		padding-left: 0px;
	} */
`;

const WeekTabsItemTextDesktop = styled.span`
	display: none;
	@media ${device.desktop} {
		display: inline;
	}
`;
const WeekTabsItemTextMobTab = styled.span`
	@media ${device.desktop} {
		display: none;
	}
`;
const WeekTabsWeekInfo = styled.p`
	display: none;
	@media ${device.tablet} {
		display: inline;
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		color: #000000;
	}
	@media ${device.desktop} {
		display: none;
	}
`;

const WeekTabContentContainer = styled.div`
	background-color: #ffffff;
	width: 100%;
	@media ${device.tablet} {
		background-color: #fafafa;
		padding-bottom: 1px;
	}
`;
const ContainerForBalanceandInfo = styled.div`
	@media (max-width: ${size.desktop}) {
		display: flex;
		justify-content: center;
		flex-wrap: wrap-reverse;
		width: 100%;
		height: 40px;
		padding-top: 95px;
		padding-bot: 40px;
	}
	@media ${device.desktop} {
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		margin-left: 110px;
		margin-right: 50px;
	}
`;
const WeekTabContentBalance = styled.div`
	display: none;
	@media ${device.tablet} {
		display: block;
	}
`;
const WeekTabContentWeekInfoP = styled.p`
	text-align: center;
	width: 100%;
	font-family: Montserrat;
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
	line-height: 15px;
	@media (min-width: ${size.desktop}) {
		text-align: start;
		display: block;
		line-height: 15px;
		margin-top: 30px;
	}
`;
const WeekTabContentWeekInfoSpan = styled.span`
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

const WeekTabContentWeekInfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (min-width: ${size.desktop}) {
		display: block;
	}
`;
const WeekTabContentWeekInfo = styled.p`
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	display: inline;
	color: #000000;
	margin-bottom: 15px;
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.desktop} {
		display: inline;
	}
`;

export {
	MainPageContainer,
	WeekTabsContainer,
	WeekTabsList,
	WeekTabContentContainer,
	ContainerForBalanceandInfo,
	WeekTabsItemTextDesktop,
	WeekTabsItemTextMobTab,
	WeekTabContentWeekInfoContainer,
	WeekTabContentWeekInfo,
	WeekTabContentWeekInfoP,
	WeekTabContentBalance,
	WeekTabsWeekInfo,
	WeekTabContentWeekInfoSpan,
};
