import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/counterSlice'
import TaskReducer from '../features/task/taskSlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import SessionReducer from '../features/session/sessionSlice'
import { pokeApiSlice } from '../features/pokemon/pokeApiSlice'
import PaginationReducer from '../features/pagination/paginationSlice'


export const store = configureStore({
  reducer: {
    session: SessionReducer,
    counter: CounterReducer,
    task: TaskReducer,
    paginator: PaginationReducer,
    [pokeApiSlice.reducerPath]: pokeApiSlice.reducer,
  },
  middleware: [
    thunk,
    logger,
    pokeApiSlice.middleware,
  ]
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
