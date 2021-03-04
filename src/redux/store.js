//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
//Redux
import authRootReducer from './auth/authReducers';
import loaderReducer from './loader/loaderReducer';
import weekReducer from './week/weekReducers';
import errorReducer from './error/errorReducer';
<<<<<<< HEAD
// import contactsReducer from './contacts/contactsReducer';
import planningReducer from './planning/planningReducers';
=======
// import contactsReducer from './contacts/contactsReducer';
>>>>>>> dev

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {

		auth: persistReducer(authPersistConfig, authRootReducer),
		week: weekReducer,
<<<<<<< HEAD
        planning: planningReducer,
		// contacts:contactsReducer,
=======
		// contacts:contactsReducer,
>>>>>>> dev
		error: errorReducer,
		loader: loaderReducer,
		},
		middleware: getDefaultMiddleware({
			serializableCheck: false
		}),
});

export const persistor = persistStore(store);
