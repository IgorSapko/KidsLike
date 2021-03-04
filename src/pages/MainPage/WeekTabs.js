import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { WeekTabs_container, WeekTabs_list } from './MainPage.styled';
import styles from './Helper.module.css';

export default function WeekTabs(week) {
	const daysOfWeek = function createDaysOfWeek() {
		const daysOfWeek = [];

		const startWeek = dayjs().startOf('week').add(1, 'day');

		for (let i = 0; i < 7; i++) {
			daysOfWeek.push(startWeek.add(i, 'day').format('DD-MM-YYYY'));
		}

		return daysOfWeek;
	};
	const checkActive = (match, location) => {
		if (!location) return false;
		const { pathname } = location;

		return pathname === '/';
	};
	return (
		<>
			<div>
				<WeekTabs_container>
					<WeekTabs_list>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[0]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[0]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Понедельник
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[1]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[1]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Вторник
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[2]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[2]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Среда
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[3]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[3]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Четверг
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[4]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[4]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Пятница
							</NavLink>
						</li>
						<li className="">
							<NavLink
								to={`/?day=` + daysOfWeek()[5]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[5]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Суббота
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/?day=` + daysOfWeek()[6]}
								isActive={(_, location) => {
									if (location.search === `?day=` + daysOfWeek()[6]) return true;
								}}
								className={styles.notSelected}
								activeClassName={styles.selected}
							>
								Воскресенье
							</NavLink>
						</li>
					</WeekTabs_list>
				</WeekTabs_container>
			</div>
		</>
	);
}
