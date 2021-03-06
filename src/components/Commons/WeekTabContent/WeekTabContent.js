import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
	WeekTabContent_container,
	ContainerForBalanceandInfo,
	WeekTabContent_weekInfo,
	WeekTabContent_WeekInfo_container,
	WeekTabContent_weekInfo_p,
	WeekTabContent_Balance,
} from '../../../pages/MainPage/MainPage.styled';
import styles from '../../../pages/MainPage/Helper.module.css';
import Card from '../../Commons/Card/Card';
import CurrentDay from '../CurrentDay/CurrentDay';
import { choosenDay } from 'pages/MainPage/Helpers';

export default function WeekTabsContent({ week }) {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	let daysQuery = query.get('day');
	const tasks = week.tasks;
	const today = dayjs().format('DD-MM-YYYY');
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
	todayTasks(daysQuery, tasks);
	return (
		<WeekTabContent_container>
			<CurrentDay thisDay={daysQuery} choosenDay={dayIsChoose} />
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
						<Card key={el.title} item={el} currentDay={daysQuery} today={today}></Card>
					</li>
				))}
			</ul>
		</WeekTabContent_container>
	);
}
