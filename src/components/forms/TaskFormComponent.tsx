import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { ADD_TODO } from '../../features/task/taskSlice'

// Formik
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const TaskFormComponent = (): React.JSX.Element => {
  const dispatch = useAppDispatch()

  const newTaskSchema = Yup.object().shape(
    {
      text: Yup.string()
        .required('Text is required'),
    }
  )

  const initialValues = {
    text: '',
  }

  const onSubmitNewTask = (values: { text:string }): void => {
    if (values.text !== '') {
      dispatch(ADD_TODO(values.text))
      values.text = ''
    }
  }

  return (
    <div className='sub-container'>
      <fieldset className='fieldset'>
        <legend className='fieldset__legend'>Create a new task</legend>
        <Formik initialValues={ initialValues } onSubmit={ onSubmitNewTask } validationSchema={ newTaskSchema }>
          <Form className='form-container' >
            <div className='form-field'>
              <label htmlFor='text' className='form-field__label'>Text:</label>
              <Field id='text' name='text' className='form-field__input' placeholder='Task content' />
              <ErrorMessage name='text' component='div' className='error-message' />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-success'>
                Add New Task <FontAwesomeIcon icon={ faPlus } />
              </button>
            </div>
          </Form>
        </Formik>
      </fieldset>
    </div>
  )
}
