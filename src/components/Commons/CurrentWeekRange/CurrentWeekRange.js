import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	WeekTabs_list,
	WeekTabs_item_text_mob_tab,
	WeekTabs_item_text_desktop,
} from '../../../pages/MainPage/MainPage.styles';
import styles from '../../../pages/MainPage/Helper.module.css';
import { nameOfDaysFunc } from 'utils/Helpers';

export default function CurrentWeekRange() {
	return (
		<WeekTabs_list>
			{nameOfDaysFunc().map(el => {
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
	);
}