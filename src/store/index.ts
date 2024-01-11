import { combineReducers, configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'
import logger from 'redux-logger'

export const rootReducer = combineReducers({
  card,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof rootReducer>
