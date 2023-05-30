import {
  faHomeAlt,
  faRightFromBracket,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  NavLink,
  useNavigate,
} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { LOGOUT } from '../../features/session/sessionSlice'


const NavContainer = (): React.JSX.Element => {
  const navigate = useNavigate()
  const isLogged = useAppSelector((state) => state.session.isLogged)
  const dispatch = useAppDispatch()

  const logout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(LOGOUT())
    navigate('/', {replace: true})
  }

  const getLinks = () => {
    let link = (<NavLink to='/login' className='nav-link' replace={true} children={
      <>
        <span>Login</span> <FontAwesomeIcon icon={faUserAlt}/>
      </>
    }/>)

    if (isLogged) {
      link = (<a href='#logout' className='nav-link' onClick={ logout }>
        <span>Logout</span> <FontAwesomeIcon icon={faRightFromBracket}/>
      </a>)
    }

    return link
  }

  return (
    <nav className='nav'>
      <NavLink to='/' className='nav-link' replace children={
        <>
          <FontAwesomeIcon icon={ faHomeAlt } /> <span>Home</span>
        </>
      }/>
      { getLinks() }
    </nav>
  )
}


export default NavContainer
