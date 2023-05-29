import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/counterSlice'
import TaskReducer from '../features/task/taskSlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    task: TaskReducer
  },
  middleware: [
    thunk,
    logger,
  ]
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
