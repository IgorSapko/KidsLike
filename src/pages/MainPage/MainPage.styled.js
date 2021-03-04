/* html,
body {
	height: 100%;
	margin: 0px;
	padding: 0px;
} */
import styled from 'styled-components';
const MainPage_container = styled.div`
	display: flex;
`;
const WeekTabs_container = styled.div`
	height: 100vh;
	width: 240px;
	background-color: #ffbc33;
`;
const WeekTabs_list = styled.ul`
	list-style: none;
	margin-top: 0px;
	margin-left: 50px;
	padding-top: 150px;
	padding-left: 0px;
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
	display: flex;
	justify-content: space-between;
	margin-left: 110px;
	margin-right: 50px;
`;
export {
	MainPage_container,
	WeekTabs_container,
	WeekTabs_list,
	WeekTabContent_container,
	ContainerForBalanceandInfo,
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
