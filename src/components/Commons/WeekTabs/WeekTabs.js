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
} from '../../../pages/MainPage/MainPage.styled';
import styles from '../../../pages/MainPage/Helper.module.css';
import { monthInNumbFunc } from 'pages/MainPage/Helpers';
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
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}{' '}
						{monthInNumbFunc(week).name}
					</WeekTabs_weekInfo>
					<WeekTabs_list>
						{nameOfdays.map(el => {
							return (
								<li key={el.date}>
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
