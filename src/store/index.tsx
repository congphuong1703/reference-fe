import { Reducer } from 'react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
const reduxLogger = require('redux-logger')

const persisConfig = {
	key : 'root',
	storage,
	stateReconciler: autoMergeLevel2
}