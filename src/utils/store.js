import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import expenseReducer from 'slices/expense.slice'
import budgetReducer from 'slices/budget.slice'

const rootReducer = combineReducers({
  expense: expenseReducer,
  budget: budgetReducer,
  // add more reducers
})

const persistConfig = {
  key: 'root-debug',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

export const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
})

export const persistor = persistStore(store)
