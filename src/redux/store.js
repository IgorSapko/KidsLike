//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
//Redux
import { authReducers } from './auth';
import loaderReducer from './loader/loaderReducer';
import { taskReducers } from './task';
import errorReducer from './error/errorReducer';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducers),
		// startWeekDate:,
		// endWeekDate: ,
		// pointsGained: ,
		// pointsPlanned: ,
		// task:tasksRootReducer,
		error: errorReducer,
		loader: loaderReducer,
	},
});

export const persistor = persistStore(store);
