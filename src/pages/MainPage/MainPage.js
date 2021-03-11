// import React, { useEffect } from 'react';
// import { DateTime } from 'luxon';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import WeekTabs from '../../components/Commons/WeekTabs/WeekTabs';
// import WeekTabsContent from '../../components/Commons/WeekTabContent/WeekTabContent';
// import {todayIs} from '../../utils/Helpers'

// import { MainPageContainer } from './MainPage.styles';

// function MainPage() {
// 	const week = useSelector(state => state.week);

// 	const today = DateTime.local().toFormat('dd-MM-yyyy');
// 	const history = useHistory();
// 	useEffect(() => {
// 		history.push(todayIs());
// 	}, []);

// 		return (
// 		<>
// 			<MainPageContainer>
// 				<WeekTabs week={week} />
// 				<WeekTabsContent week={week} />
// 			</MainPageContainer>
// 		</>
// 	);
// }

// export default MainPage;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WeekTabs from '../../components/Commons/WeekTabs/WeekTabs';
import WeekTabsContent from '../../components/Commons/WeekTabContent/WeekTabContent';
import { MainPageContainer } from './MainPage.styles';
import { todayIs } from 'utils/Helpers';

function MainPage() {
	const week = useSelector(state => state.week);
	const history = useHistory();
	useEffect(() => {
		history.push(todayIs());
	}, []);
	return (
		<>
			<MainPageContainer>
				<WeekTabs week={week} />
				<WeekTabsContent week={week} />
			</MainPageContainer>
		</>
	);
}

export default MainPage;