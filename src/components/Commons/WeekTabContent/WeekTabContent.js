// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { DateTime } from 'luxon';
// import Card from '../../Commons/Card/Card';
// import CardList from '../../Commons/CardList/CardList';
// import CurrentDay from '../CurrentDay/CurrentDay';
// import { choosenDay } from 'utils/Helpers';
// import { WeekTabContentContainer } from '../../../pages/MainPage/MainPage.styles';
// import styles from '../../../pages/MainPage/Helper.module.css';
// import { WeekTabContentList, WeekTabContentPlanning } from './WeekTabContent.styles';

// export default function WeekTabsContent({ week }, props) {
// 	function useQuery() {
// 		return new URLSearchParams(useLocation().search);
// 	}

// 	let query = useQuery();
// 	let daysQuery = query.get('day');
// 	const tasks = week.tasks;
// 	const today = DateTime.local().toFormat('dd-MM-yyyy');
// 	let dayIsChoose = choosenDay(daysQuery);

// 	function todayTasks(daysQuery, tasks) {
// 		const returnedTasks = [];
// 		tasks.map(el => {
// 			const activeTask = el.days.filter(el => {
// 				return el.isActive === true && el.date === daysQuery;
// 			});

// 			if (activeTask.length === 1) {
// 				returnedTasks.push(el);
// 				return el;
// 			}
// 		});
// 		return returnedTasks;
// 	}
	
// 	return (
// 		<WeekTabContentContainer>
// 			<CurrentDay thisDay={daysQuery} choosenDay={dayIsChoose} />
// 			{todayTasks(daysQuery, tasks).length < 1 && (
// 				<WeekTabContentPlanning>
// 					<p>На этот день задачи нет</p>
// 					<Link to="/planning" className={styles.WeekTabContent_planning_Link}>
// 						Запланировать задачи
// 					</Link>
// 				</WeekTabContentPlanning>
// 			)}
// 			<div
// 				className={
// 					todayTasks(daysQuery, tasks).length > 0
// 						? `${styles.WeekTabContent_none}`
// 						: `${styles.WeekTabContent_image}`
// 				}
// 			></div>

// 			<WeekTabContentList>
// 				{daysQuery && <CardList currentDay={daysQuery} today={today}></CardList>}
// 			</WeekTabContentList>
// 				</WeekTabContentContainer>
// 	);
// }


import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import Card from '../../Commons/Card/Card';
import CardList from '../../Commons/CardList/CardList';
import CurrentDay from '../CurrentDay/CurrentDay';
import { choosenDay } from 'utils/Helpers';
import { WeekTabContentContainer } from '../../../pages/MainPage/MainPage.styles';
import styles from '../../../pages/MainPage/Helper.module.css';
import { WeekTabContentList, WeekTabContentPlanning } from './WeekTabContent.styles';

export default function WeekTabsContent({ week }, props) {
	function UseQuery() {
		return new URLSearchParams(useLocation().search);
	}

	let query = UseQuery();
	let daysQuery = query.get('day');
	const tasks = week.tasks;
	const today = DateTime.local().toFormat('dd-MM-yyyy');
	let dayIsChoose = choosenDay(daysQuery);

	function todayTasks(daysQuery, tasks) {
		const returnedTasks = [];
		tasks.map(el => {
			const activeTask = el.days.filter(el => {
				return el.isActive === true && el.date === daysQuery;
			});

			if (activeTask.length === 1) {
				returnedTasks.push(el);
				return el;
			}
		});
		return returnedTasks;
	}
console.log('daysQuery',daysQuery)
	return (
		<WeekTabContentContainer>
			<CurrentDay thisday={daysQuery} choosenDay={dayIsChoose} />
			{todayTasks(daysQuery, tasks).length < 1 && (
				<WeekTabContentPlanning>
					<p>На этот день задачи нет</p>
					<Link to="/planning" className={styles.WeekTabContent_planning_Link}>
						Запланировать задачи
					</Link>
				</WeekTabContentPlanning>
			)}
			<div
				className={
					todayTasks(daysQuery, tasks).length > 0
						? `${styles.WeekTabContent_none}`
						: `${styles.WeekTabContent_image}`
				}
			></div>

			<WeekTabContentList>
				{daysQuery && <CardList currentDay={daysQuery} today={today}></CardList>}
			</WeekTabContentList>
		</WeekTabContentContainer>
	);
}