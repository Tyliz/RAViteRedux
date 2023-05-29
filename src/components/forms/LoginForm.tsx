// TODO: make a Formik loginForm with redux
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   ErrorMessage,
//   Field,
//   Form,
//   Formik,
// } from 'formik'
// import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { faBan } from '@fortawesome/free-solid-svg-icons'


const LoginForm = () => {

  const navigate = useNavigate()

  return (
    <div className='border border-1 border-primary rounded-3 p-3 col-md-6 offset-md-3'>
      <h4>Login Formik</h4>
      <hr />
      <button type='button' className='btn btn-danger m-1' onClick={ () => navigate('/', { replace: true }) }>
        Cancel <FontAwesomeIcon icon={ faBan }/>
      </button>
    </div>
  )
}

export default LoginForm
