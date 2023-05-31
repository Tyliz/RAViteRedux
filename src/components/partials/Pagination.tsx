import PropTypes, { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../../app/hooks'


const PaginationProps = {
  toLink: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
  itemsName: PropTypes.string,
}

const Pagination = ({
  toLink,
  changePage,
  itemsName,
}: InferProps<typeof PaginationProps>) => {
  const {
    lstPage,
    actualPage,
    totalPages,
    itemsPerPage,
    totalItems,
  } = useAppSelector((state) => state.paginator)

  const infoItems = () => {
    if (itemsName && itemsPerPage && totalItems) {
      return (
        <p className='info-items'>
          Showing <b>{ itemsPerPage } { itemsName }</b> of <b>{ totalItems }</b>
        </p>
      )
    }
  }

  const firstPage = () => {
    if (actualPage > 5 && totalPages > 10) {
      return (
        <Link className='btn-page' to={ toLink }>
          <FontAwesomeIcon icon={ faAnglesLeft } /> First
        </Link>
      )
    }
  }

  const lastPage = () => {
    if (actualPage < totalPages && totalPages > 10) {
      return (
        <Link className='btn-page' to={ toLink + `?page=${totalPages}` } onClick={ () => changePage(totalPages) }>
          Last <FontAwesomeIcon icon={ faAnglesRight } />
        </Link>
      )
    }
  }


  return (
    <div>
      { infoItems() }
      <div className='paginator'>
        { firstPage() }
        {
          lstPage.map((page, index) =>
            page !== actualPage ? (
              <Link key={ index } className='btn-page' to={ toLink + (page > 1 ? `?page=${page}` : '') } onClick={ () => changePage(page) }>
                { page }
              </Link>
            ) : (
              <span key={ index } className='btn-page actual'>
                { page }
              </span>
            )
          )
        }
        { lastPage() }
      </div>
    </div>
  )
}

Pagination.propTypes = PaginationProps

export default Pagination
