import React from 'react'
import './styles/app.scss'
import { TaskListComponent } from './components/pure/TaskListComponent'
import { TaskFormComponent } from './components/forms/TaskFormComponent'

function App(): React.JSX.Element {
  return (
    <>
      <TaskListComponent />
      <TaskFormComponent />
    </>
  )
}

export default App
