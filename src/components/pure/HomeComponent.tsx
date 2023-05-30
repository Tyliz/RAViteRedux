import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeComponent = (): React.JSX.Element => {
  return (
    <div className='container'>
      <NavLink to='/Task' className='btn-menu-icon' children={
        <>
          <FontAwesomeIcon icon={ faTasks } className='btn-menu-icon__icon' />
          <span className='btn-menu-icon__text'>Task</span>
        </>
      }/>
    </div>
  )
}
