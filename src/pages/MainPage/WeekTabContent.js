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
} from './MainPage.styled';
import styles from './Helper.module.css';
import Card from '../../components/Commons/Card/Card';

export default function WeekTabsContent({ week }) {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	let daysQuery = query.get('day');
	const tasks = week.tasks;
	const today = dayjs().format('DD-MM-YYYY');

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
			<ContainerForBalanceandInfo>
				<WeekTabContent_WeekInfo_container>
					<WeekTabContent_weekInfo>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}
					</WeekTabContent_weekInfo>
					<WeekTabContent_weekInfo_p>Мои задачи: {today}</WeekTabContent_weekInfo_p>
				</WeekTabContent_WeekInfo_container>
				<WeekTabContent_Balance>А тут баланс</WeekTabContent_Balance>
			</ContainerForBalanceandInfo>
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
