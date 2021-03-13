// import styled from 'styled-components';
// import { device, size } from '../../index.styles';

// const MainPageContainer = styled.div`
// 	@media (max-width: ${size.desktop}) {
// 		display: block;
// 	}
// 	@media ${device.desktop} {
// 		display: flex;
// 	}
// `;
// const WeekTabsContainer = styled.div`
// 	background-color: none;
// 	display: flex;
// 	justify-content: space-evenly;
// 	align-items: center;
// 	height: 60px;
// 	@media (min-width: ${size.tablet}) {
// 		background-color: #ffbc33;
// 		width: 100%;
// 		height: 70px;
// 		display: flex;
// 		justify-content: space-evenly;
// 		align-items: center;
// 	}
// 	@media ${device.desktop} {
// 		height: 100%;
// 		width: 240px;
// 		/* position: fixed; */
// 		z-index: 1;
// 		/* top: 0; */
// 		left: 0;
// 	}
// `;
// const WeekTabsList = styled.ul`
// 	@media (max-width: ${size.desktop}) {
// 		list-style: none;
// 		display: flex;
// 		justify-content: space-between;
// 		width: 336px;
// 		margin-left: 0px;

// 	}
// 	@media ${device.desktop} {
// 		list-style: none;
// 		margin-top: 0px;
// 		margin-left: 50px;
// 			padding-left: 0px;
// 		;
// 	}
// 	@media ${device.tablet} {
// 		border-color:red;
// 	}
// `;

// const WeekTabsItemTextDesktop = styled.span`
// 	display: none;
// 	@media ${device.desktop} {
// 		display: inline;
// 	}
// `;
// const WeekTabsItemTextMobTab = styled.span`
// 	@media ${device.desktop} {
// 		display: none;
// 	}
// `;
// const WeekTabsWeekInfo = styled.p`
// 	display: none;
// 	@media ${device.tablet} {
// 		display: inline;
// 		font-family: Montserrat;
// 		font-style: normal;
// 		font-weight: normal;
// 		font-size: 14px;
// 		line-height: 17px;
// 		color: #000000;
// 	}
// 	@media ${device.desktop} {
// 		display: none;
// 	}
// `;

// const WeekTabContentContainer = styled.div`
// 	background-color: #ffffff;
// 	width: 100%;
// 	@media ${device.tablet} {
// 		background-color: #fafafa;
// 	}
// 	@media ${device.desktop} {
// 		min-height: calc(100vh - 50px);
// 		}
// `;
// const ContainerForBalanceandInfo = styled.div`
// 	@media (max-width: ${size.desktop}) {
// 		display: flex;
// 		justify-content: center;
// 		flex-wrap: wrap-reverse;
// 		width: 100%;
// 		height: 40px;
// 		padding-top: 95px;
// 		padding-bot: 40px;
// 	}
// 	@media ${device.desktop} {
// 		display: flex;
// 		justify-content: space-between;
// 		margin-top: 40px;
// 		margin-left: 110px;
// 		margin-right: 50px;
// 	}
// `;
// const WeekTabContentBalance = styled.div`
// 	display: none;
// 	@media ${device.tablet} {
// 		display: block;
// 	}
// `;
// const WeekTabContentWeekInfoP = styled.p`
// 	text-align: center;
// 	width: 100%;
// 	font-family: Montserrat;
// 	font-weight: 500;
// 	font-size: 12px;
// 	color: #a6abb9;
// 	line-height: 15px;
// 	@media (min-width: ${size.desktop}) {
// 		text-align: start;
// 		display: block;
// 		line-height: 15px;
// 		margin-top: 30px;
// 	}
// `;
// const WeekTabContentWeekInfoSpan = styled.span`
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

// const WeekTabContentWeekInfoContainer = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	flex-wrap: wrap;
// 	@media (min-width: ${size.desktop}) {
// 		display: block;
// 	}
// `;
// const WeekTabContentWeekInfo = styled.p`
// 	font-family: Montserrat;
// 	font-style: normal;
// 	font-weight: normal;
// 	font-size: 14px;
// 	display: inline;
// 	color: #000000;
// 	margin-bottom: 15px;
// 	@media ${device.tablet} {
// 		display: none;
// 	}
// 	@media ${device.desktop} {
// 		display: inline;
// 	}
// `;

// export {
// 	MainPageContainer,
// 	WeekTabsContainer,
// 	WeekTabsList,
// 	WeekTabContentContainer,
// 	ContainerForBalanceandInfo,
// 	WeekTabsItemTextDesktop,
// 	WeekTabsItemTextMobTab,
// 	WeekTabContentWeekInfoContainer,
// 	WeekTabContentWeekInfo,
// 	WeekTabContentWeekInfoP,
// 	WeekTabContentBalance,
// 	WeekTabsWeekInfo,
// 	WeekTabContentWeekInfoSpan,
// };

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
		/* position: fixed; */
		z-index: 1;
		/* top: 0; */
		left: 0;
	}
`;
const WeekTabsList = styled.ul`
	@media (max-width: ${size.desktop}) {
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
		min-height: calc(100vh - 212px);
	}
	@media ${device.desktop} {
		min-height: calc(100vh - 142px);
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
