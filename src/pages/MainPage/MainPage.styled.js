/* html,
body {
	height: 100%;
	margin: 0px;
	padding: 0px;
} */
import styled from 'styled-components';
import { device, size } from '../../index.styles';
const MainPage_container = styled.div`
	@media (max-width: ${size.desktop}) {
		display: block;
	}
	@media ${device.desktop} {
		display: flex;
	}
`;
const WeekTabs_container = styled.div`
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
		height: 100%;
		width: 240px;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
	}
`;
const WeekTabs_list = styled.ul`
	@media (max-width: ${size.desktop}) {
		list-style: none;
		display: flex;
		justify-content: space-between;
		width: 336px;
		margin-left: 0px;
	}
	@media ${device.desktop} {
		list-style: none;
		margin-top: 0px;
		margin-left: 50px;
		padding-top: 150px;
		padding-left: 0px;
	}
`;

const WeekTabs_item_text_desktop = styled.span`
	display: none;
	@media ${device.desktop} {
		display: inline;
	}
`;
const WeekTabs_item_text_mob_tab = styled.span`
	@media ${device.desktop} {
		display: none;
	}
`;
const WeekTabs_weekInfo = styled.p`
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

const WeekTabContent_container = styled.div`
	background-color: #ffffff;
	width: 100%;
	@media ${device.tablet} {
		background-color: #fafafa;
	}
	@media ${device.desktop} {
		min-height: calc(100vh - 50px);
		margin-left: 240px;
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
const WeekTabContent_Balance = styled.div`
	display: none;
	@media ${device.tablet} {
		display: block;
	}
`;
const WeekTabContent_weekInfo_p = styled.p`
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
const WeekTabContent_weekInfo_span = styled.span`
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

const WeekTabContent_WeekInfo_container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (min-width: ${size.desktop}) {
		display: block;
	}
`;
const WeekTabContent_weekInfo = styled.p`
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
	MainPage_container,
	WeekTabs_container,
	WeekTabs_list,
	WeekTabContent_container,
	ContainerForBalanceandInfo,
	WeekTabs_item_text_desktop,
	WeekTabs_item_text_mob_tab,
	WeekTabContent_WeekInfo_container,
	WeekTabContent_weekInfo,
	WeekTabContent_weekInfo_p,
	WeekTabContent_Balance,
	WeekTabs_weekInfo,
	WeekTabContent_weekInfo_span,
};
