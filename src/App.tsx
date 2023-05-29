import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { NotFoundPage } from './pages/404/NotFoundPage'
import LoginForm from './components/forms/LoginForm'


function App() {
  // TODO: change to sessionStorage or something else
  const loggedIn = false

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            loggedIn ?
              <Navigate to='/dashboard' /> :
              <Navigate to='/login' />
          }
        />
        <Route path='/login'
          element={
            !loggedIn ?
              <LoginForm /> :
              <Navigate to='/dashboard' />
          }
        />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
