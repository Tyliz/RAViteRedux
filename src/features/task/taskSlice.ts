import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../classes/task'


interface TaskState {
  lstTask: Task[]
  filter: string
}

export const enum filterTask {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

const initialState: TaskState = {
  lstTask: [{id: 1, text: 'dfsdf', completed: false}],
  filter: filterTask.SHOW_ALL,
}

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<Task>) => {
      state.lstTask = [
        ...state.lstTask,
        action.payload
      ]
    },
    TOGGLE_TODO: (state, action: PayloadAction<number>) => {
      state.lstTask = state.lstTask.map((task) =>
        task.id == action.payload
        ? {
          ...task,
          completed: !task.completed
        }
        : task
      )
    }
  }
})

export const {
  ADD_TODO,
  TOGGLE_TODO,
} = TaskSlice.actions

export default TaskSlice.reducer
