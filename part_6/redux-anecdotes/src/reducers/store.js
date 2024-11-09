import { configureStore, combineReducers } from '@reduxjs/toolkit'
import anecdotesReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import notificationReducer from './notifications'

const rootReducer = combineReducers({
  anecdotes: anecdotesReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
