import React from 'react'
import PropTypes, { type InferProps } from 'prop-types'
import Task from '../../classes/task'

const TaskComponentProps = {
  onToggleTask: PropTypes.func.isRequired,
  task: PropTypes.instanceOf(Task).isRequired,
}

const TaskComponent = (
  {
    onToggleTask,
    task,
  }: InferProps<typeof TaskComponentProps>
): React.JSX.Element => {
  const getClassTask = (): string => {
    let classCss = 'task'
    if (task.completed) {
      classCss += ' task--completed'
    } else {
      classCss += ' task--pending'
    }

    return classCss
  }


  return (
    <div onClick={ onToggleTask } className={ getClassTask() }>
      { task.id } - { task.text }
    </div>
  )
}

TaskComponent.propTypes = TaskComponentProps

export default TaskComponent
