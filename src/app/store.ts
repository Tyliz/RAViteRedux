import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/counterSlice'
import TaskReducer from '../features/task/taskSlice'


export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    task: TaskReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
