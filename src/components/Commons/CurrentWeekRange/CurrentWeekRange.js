import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	WeekTabsList,
	WeekTabsItemTextMobTab,
	WeekTabsItemTextDesktop,
} from '../../../pages/MainPage/MainPage.styles';
import styles from '../../../pages/MainPage/Helper.module.css';
import { nameOfDaysFunc } from 'utils/Helpers';

export default function CurrentWeekRange() {
	return (
		<WeekTabsList>
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
							<WeekTabsItemTextDesktop>{el.full}</WeekTabsItemTextDesktop>
							<WeekTabsItemTextMobTab>{el.short}</WeekTabsItemTextMobTab>
						</NavLink>
					</li>
				);
			})}
		</WeekTabsList>
	);
}