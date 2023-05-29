import { faHouse, faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/', { replace: true })
  }

  return (
    // TODO: improve 404 Page
    <div>
      <h1>404 - Page Not Found</h1>
      <h2>
        <FontAwesomeIcon icon={ faFaceGrinBeamSweat } />
      </h2>
      <button className='btn-danger' onClick={ goHome }>
        Go Home <FontAwesomeIcon icon={ faHouse } />
      </button>
    </div>
  )
}
