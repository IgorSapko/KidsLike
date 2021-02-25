//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
//Redux
import authRootReducer from './auth/authReducers';
import loaderReducer from './loader/loaderReducer';
import weekReducer from './week/weekReducers';
import errorReducer from './error/errorReducer';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
  version: 1,
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authRootReducer),
		week: weekReducer,
		error: errorReducer,
		loader: loaderReducer,
		middleware: getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	},
});

export const persistor = persistStore(store);
