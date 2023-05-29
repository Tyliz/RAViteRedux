import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../classes/task'


interface TaskState {
  lstTask: Task[]
  idLastTask: number
  filter: string
}

export const enum filterTask {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

const initialState: TaskState = {
  lstTask: [],
  idLastTask: 0,
  filter: filterTask.SHOW_ALL,
}

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<string>) => {
      state.lstTask.push(new Task(state.idLastTask, action.payload))
      state.idLastTask++
    },
    TOGGLE_TODO: (state, action: PayloadAction<number>) => {
      state.lstTask = state.lstTask.map((task) =>
        task.id == action.payload
        ? new Task(
          task.id,
          task.text,
          !task.completed,
        )
        : task
      )
    }
  },
})

export const {
  ADD_TODO,
  TOGGLE_TODO,
} = TaskSlice.actions

export default TaskSlice.reducer
