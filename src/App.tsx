import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { NotFoundPage } from './pages/404/NotFoundPage'
import LoginForm from './components/forms/LoginForm'
import NavContainer from './components/partials/NavContainer'
import { useAppSelector } from './app/hooks'

// Styles
import './styles/app.scss'
import { HomeComponent } from './components/pure/HomeComponent'
import { TaskListComponent } from './components/pure/TaskListComponent'
import PokeListComponent from './components/pure/PokeListComponent'


function App() {
  const isLogged = useAppSelector((state) => state.session.isLogged)


  return (
    <BrowserRouter>
      <NavContainer />
      <Routes>
        <Route path='/'
          element={ <HomeComponent /> }
        />
        <Route path='/login'
          element={
            !isLogged ?
              <LoginForm /> :
              <Navigate to='/' />
          }
        />
        <Route path='/Task'
          element={
            !isLogged ?
              <TaskListComponent /> :
              <Navigate to='/' />
          }
        />
        <Route path='/Pokemon'
          element={
            !isLogged ?
              <PokeListComponent /> :
              <Navigate to='/' />
          }
        />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
