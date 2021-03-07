import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { WeekTabContent_container } from '../../../pages/MainPage/MainPage.styles';
import styles from '../../../pages/MainPage/Helper.module.css';
import Card from '../../Commons/Card/Card';
import CurrentDay from '../CurrentDay/CurrentDay';
import { choosenDay } from 'utils/Helpers';

export default function WeekTabsContent({ week }) {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	let daysQuery = query.get('day');
	const tasks = week.tasks;
	console.log('tasks', tasks)
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