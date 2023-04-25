import { Reducer } from 'react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
const reduxLogger = require('redux-logger')
import storage from 'redux-persist/lib/storage';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import { AnyAction, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from './reducers';

const persistConfig = {
	key : 'root',
	storage,
	stateReconciler: autoMergeLevel2
};

const middleWares = getDefaultMiddleware({
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
});

if (process.env.NODE_ENV === `development`) {
	const { logger } = reduxLogger;
	middleWares.push(logger);
}

const persistedReducer = persistReducer(
	persistConfig,
	rootReducer as Reducer<unknown, AnyAction>,
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
