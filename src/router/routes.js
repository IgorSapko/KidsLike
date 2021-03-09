//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'MainPage',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/MainPage/MainPage' /* webpackChunkName: "MainPage" */)),
	},
	{
		path: '/contacts',
		label: 'ContactsPage',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() =>
			import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage"*/),
		),
	},
	{
		path: '/auth',
		label: 'AuthPage',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/)),
	},
	{
		path: '/planning',
		label: 'PlanningPage',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/PlanningPage/PlanningPage' /* webpackChunkName: "PlanningPage"*/)),
	},
	{
		path: '/awards',
		label: 'AwardsPage',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/AwardsPage/AwardsPage' /* webpackChunkName: "AwardsPage"*/)),
	},
];

export default routes;
