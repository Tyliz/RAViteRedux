import React, {
  useRef,
} from 'react'
import { useAppDispatch } from '../../app/hooks'
import { ADD_TODO } from '../../features/task/taskSlice'


export const TaskFormComponent = (): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const taskText = useRef<HTMLInputElement>(null)

  const onAddTask = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    if (taskText.current !== null) {
      dispatch(ADD_TODO(taskText.current.value))
      taskText.current.value = ''
    }
  }

  return (
    <div className='form-container'>
      <h2>Create a new To Do</h2>
      <form onSubmit={ onAddTask }>
        <div className='form-group'>
          <label htmlFor='txtTask'>Task:</label>
          <input id='txtTask' type='text' ref={ taskText } placeholder='Task' required />
        </div>
        <button type='submit'>
          Create new Task
        </button>
      </form>
    </div>
  )
}
