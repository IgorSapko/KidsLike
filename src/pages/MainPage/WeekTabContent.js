import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { WeekTabContent_container, ContainerForBalanceandInfo } from './MainPage.styled';
import styles from './Helper.module.css';
import Card from '../../components/Commons/Card/Card';
import CurrentDay from '../../components/Commons/CurrentDay/CurrentDay';

export default function WeekTabsContent({ week }) {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	let daysQuery = query.get('day');
	const tasks = week.tasks;
	const today = dayjs().format('DD-MM-YYYY');

	// function getDayName(dateStr, locale) {
	// 	const date =  new Date(
	// 		`${dateStr.slice(3, 5)}-${dateStr.slice(0, 2)}-${dateStr.slice(6, 10)}`,
	// 	);
	// 	return date.toLocaleDateString(locale, { weekday: 'long' });
	// }

	// const dayName = getDayName(daysQuery, 'ru-RU');
	// console.log('dayname', dayName);

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
	todayTasks(daysQuery, tasks);
	return (
		<WeekTabContent_container>
			<CurrentDay thisday={daysQuery} />
			{/* <ContainerForBalanceandInfo>
				<div className="WeekTabContent_WeekInfo">
					<p>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}
					</p>
					<p>Мои задачи: {today}</p>
				</div>
				<div className="WeekTabContent_Balance">А тут баланс</div>
			</ContainerForBalanceandInfo> */}
			<div
				className={
					todayTasks(daysQuery, tasks).length > 0
						? `${styles.WeekTabContent_none}`
						: `${styles.WeekTabContent_planning}`
				}
			>
				<p>На этот день задачи нет</p>

				<Link to="/planning" className={styles.WeekTabContent_planning_Link}>
					Запланировать задачи
				</Link>
			</div>
			<div
				className={
					todayTasks(daysQuery, tasks).length > 0
						? `${styles.WeekTabContent_none}`
						: `${styles.WeekTabContent_image}`
				}
			></div>

			<ul
				className={
					todayTasks(daysQuery, tasks).length > 0
						? `${styles.WeekTabContent_list}`
						: `${styles.WeekTabContent_none}`
				}
			>
				{todayTasks(daysQuery, tasks).map(el => (
					<li key={el._id} className={styles.WeekTabContent}>
						<Card key={el.title} item={el} currentDay={daysQuery}></Card>
					</li>
				))}
			</ul>
		</WeekTabContent_container>
	);
}