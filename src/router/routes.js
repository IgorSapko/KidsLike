//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'MainPage',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/MainPage' /* webpackChunkName: "MainPage" */)),
	},
	{
		path: '/contacts',
		label: 'ContactsPage',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/ContactsPage' /* webpackChunkName: "ContactsPage"*/)),
	},
	{
		path: '/auth',
		label: 'AuthPage',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/)),
	},
	{
		path: '/planning',
		label: 'PlanningPage',
		exact: true,
		private: true,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/PlanningPage' /* webpackChunkName: "PlanningPage"*/)),
	},
	{
		path: '/awards',
		label: 'AwardsPage',
		exact: true,
		private: true,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/AwardsPage' /* webpackChunkName: "AwardsPage"*/)),
	},
];

export default routes;
