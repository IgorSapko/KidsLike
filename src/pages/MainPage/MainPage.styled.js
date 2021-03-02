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
		display: block;
		height: 100vh;
		width: 240px;
	}
`;
const WeekTabs_list = styled.ul`
	@media (max-width: ${size.desktop}) {
		list-style: none;
		display: flex;
		justify-content: space-between;
		width: 336px;
		// padding-top: 22px;
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

// const notSelected = styled.a`
// 	box-sizing: border-box;
// 	color: black;
// 	display: inline-block;
// 	width: 190px;
// 	height: 42px;
// 	padding-left: 27px;
// 	margin-bottom: 6px;
// 	text-decoration: none;
// 	background: rgba(255, 255, 255, 0.5);

// 	padding-top: 12px;
// 	border-top-left-radius: 5px;
// 	border-bottom-left-radius: 5px;
// `;
// const selected = styled.a`
// 	background: rgb(255, 255, 255);
// `;
const WeekTabContent_container = styled.div`
	background-color: #fafafa;
	width: 100%;
`;
const ContainerForBalanceandInfo = styled.div`
	@media (max-width: ${size.desktop}) {
		display: flex;
		justify-content: center;
		flex-wrap: wrap-reverse;
		width: 100%;
		height: 40px;
		padding-top: 85px;
		padding-bot: 40px;
	}
	@media ${device.desktop} {
		display: flex;
		justify-content: space-between;
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
	@media (min-width: ${size.desktop}) {
		text-align: start;
		display: block;
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
	display: inline;
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.desktop} {
		display: inline;
	}
`;
const WeekTabs_weekInfo = styled.p`
	display: none;
	@media ${device.tablet} {
		display: inline;
	}

	@media ${device.desktop} {
		display: none;
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
};
// const WeekTabContent_none = styled.div`
// 	display: none;
// `;
// const WeekTabContent_planning = styled.div();
// .WeekTabContent_planning {
// 	margin: 0 auto;
// 	width: 300px;
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// }
// .WeekTabContent_planning_Link {
// 	background-color: #ffbc33;
// 	color: white;
// 	padding: 15px 33px;
// 	border-radius: 5px;
// 	/* padding: 1em 1.5em; */
// 	/* position: relative; */
// 	text-decoration: none;
// }

// .WeekTabContent_list {
// 	margin-left: 110px;
// 	padding: 0px;
// 	margin-top: 40px;
// }
// .WeekTabContent {
// 	display: inline-block;
// 	border: 1px black solid;
// 	width: 280px;
// 	height: 260px;
// 	margin-right: 20px;
// 	margin-bottom: 20px;
// }
// .WeekTabContent_image {
// 	background-image: url('./img/kidsInMainPage.png');
// 	width: 100%;
// 	height: 362px;
// 	margin: 0px;
// 	padding: 0px;
// 	margin-top: 6%;
// }
// .WeekTabContent_footer {
// 	position: fixed;
// 	right: 0;
// 	bottom: 40px;
// 	margin-top: 50px;
// 	width: calc(100% - 240px);
// 	color: #858598;
// 	text-align: end;
// 	margin-right: 50px;
// }
// .WeekTabContent_footer p {
// 	margin: 0px;
// }
// .footer_content_KidsLike::after {
// 	content: url('./img/2finger.svg');
// 	width: 8px;
// 	height: 120px;
// 	margin-left: 6px;
// }
