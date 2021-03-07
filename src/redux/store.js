//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
//Redux
import authRootReducer from './auth/authReducers';
import loaderReducer from './loader/loaderReducer';
import weekReducer from './week/weekReducers';
import errorReducer from './error/errorReducer';
// import contactsReducer from './contacts/contactsReducer';
// import planningReducer from './planning/planningReducers';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authRootReducer),
		week: weekReducer,
		error: errorReducer,
		loader: loaderReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export const persistor = persistStore(store);
