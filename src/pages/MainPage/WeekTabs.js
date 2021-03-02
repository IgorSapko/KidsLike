import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { DateTime } from 'luxon';
import {
	WeekTabs_container,
	WeekTabs_list,
	WeekTabs_item_text_mob_tab,
	WeekTabs_item_text_desktop,
	WeekTabs_weekInfo,
} from './MainPage.styled';
import styles from './Helper.module.css';

export default function WeekTabs({ week }) {
	const startWeek = DateTime.local().startOf('week');
	const nameOfdays = [
		{ full: 'Понедельник', short: 'Пн', date: null },
		{ full: 'Вторник', short: 'Вт', date: null },
		{ full: 'Среда', short: 'Ср', date: null },
		{ full: 'Четверг', short: 'Чт', date: null },
		{ full: 'Пятница', short: 'Пт', date: null },
		{ full: 'Суббота', short: 'Сб', date: null },
		{ full: 'Воскресенье', short: 'Вс', date: null },
	];
	nameOfdays.map((el, index) => {
		el.date = startWeek.plus({ days: index }).toFormat('dd-MM-yyyy');
	});

	return (
		<>
			<div>
				<WeekTabs_container>
					<WeekTabs_weekInfo>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}
					</WeekTabs_weekInfo>
					<WeekTabs_list>
						{nameOfdays.map(el => {
							return (
								<li>
									<NavLink
										to={`/?day=` + el.date}
										isActive={(_, location) => {
											if (location.search === `?day=` + el.date) return true;
										}}
										className={styles.notSelected}
										activeClassName={styles.selected}
									>
										<WeekTabs_item_text_desktop>{el.full}</WeekTabs_item_text_desktop>
										<WeekTabs_item_text_mob_tab>{el.short}</WeekTabs_item_text_mob_tab>
									</NavLink>
								</li>
							);
						})}
					</WeekTabs_list>
				</WeekTabs_container>
			</div>
		</>
	);
}
// const daysOfWeek = function createDaysOfWeek() {
// 	const daysOfWeek = [];
// 	// const startWeek = DateTime.local().startOf('week');
// 	for (let i = 0; i < 7; i++) {
// 		daysOfWeek.push(startWeek.plus({ days: i }).toFormat('dd-MM-yyyy'));
// 	}
// 	return daysOfWeek;
// };

// const valueDaysOfWeek = daysOfWeek();

{
	/* <li>
<NavLink
	to={`/?day=` + daysOfWeek()[0]}
	isActive={(_, location) => {
		if (location.search === `?day=` + daysOfWeek()[0]) return true;
	}}
	className={styles.notSelected}
	activeClassName={styles.selected}
>
	<WeekTabs_item_text_desktop>Понедельник</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Пн</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Вторник</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Вт</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Среда</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Ср</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Четверг</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Чт</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Пятница</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Пт</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Суббота</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Сб</WeekTabs_item_text_mob_tab>
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
	<WeekTabs_item_text_desktop>Воскресенье</WeekTabs_item_text_desktop>
	<WeekTabs_item_text_mob_tab>Вс</WeekTabs_item_text_mob_tab>
</NavLink>
</li> */
}
