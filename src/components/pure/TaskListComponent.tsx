import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TaskComponent from './TaskComponent'
import { TOGGLE_TODO } from '../../features/task/taskSlice'
import { TaskFormComponent } from '../forms/TaskFormComponent'


export const TaskListComponent = (): React.JSX.Element => {
  const lstTask = useAppSelector((state) => state.task.lstTask)
  const dispatch = useAppDispatch()

  const onToggleTask = (id: number) => {
    dispatch(TOGGLE_TODO(id))
  }

  return (
    <div className='container'>
      <h1 className='title'>Your Tasks</h1>
      <div className='todo-list'>
        {
          lstTask.map((task, index) => (
            <TaskComponent key={ index } onToggleTask={ () => onToggleTask(task.id) } task={ task } />
          ))
        }
      </div>
      <TaskFormComponent />
    </div>
  )
}
