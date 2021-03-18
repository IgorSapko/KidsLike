import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { DateTime } from 'luxon';
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
	const [menuHeight, setMenuHeight] = useState(0);
	useEffect(() => {
		setMenuHeight(document.body.scrollHeight);
	});
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

	return (
		<WeekTabContentContainer>
			<CurrentDay thisday={daysQuery} choosenDay={dayIsChoose} menuHeight={menuHeight} />
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

			{todayTasks(daysQuery, tasks).length > 0 ? (
				<WeekTabContentList>
					{daysQuery && <CardList currentDay={daysQuery} today={today}></CardList>}
				</WeekTabContentList>
			) : null}
		</WeekTabContentContainer>
	);
}
