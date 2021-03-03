import React from 'react';
import { NavLink } from 'react-router-dom';

import { nameOfDaysFunc, monthInNumbFunc } from './Helpers';
import {
	WeekTabs_container,
	WeekTabs_list,
	WeekTabs_item_text_mob_tab,
	WeekTabs_item_text_desktop,
	WeekTabs_weekInfo,
} from './MainPage.styled';
import styles from './Helper.module.css';

export default function WeekTabs({ week }) {
	return (
		<>
			<div>
				<WeekTabs_container>
					<WeekTabs_weekInfo>
						Неделя: {week.startWeekDate.substring(0, 2)} - {week.endWeekDate.substring(0, 2)}{' '}
						{monthInNumbFunc(week).name}
					</WeekTabs_weekInfo>
					<WeekTabs_list>
						{nameOfDaysFunc().map((el, index) => {
							return (
								<li key={index}>
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
