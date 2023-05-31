// import { useAppDispatch } from '../../app/hooks'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { PAGINATION_RANGE, SET_PAGE } from '../../features/pagination/paginationSlice'
import { ListSimplePokemon, useFetchSimplePokemonQuery } from '../../features/pokemon/pokeApiSlice'
import Pagination from '../partials/Pagination'
import PokeImage from './PokeImage'


const PokeListComponent = () => {
  const itemsPerPage = useAppSelector((state) => state.paginator.itemsPerPage)
  const [searchParams, setSearchParams] = useSearchParams({}) //, setSearchParams
  const dispatch = useAppDispatch()
  const actualPage = ():number => {
    const Page = searchParams.get('page')
    if (Page !== null && Page !== '') {
      dispatch(SET_PAGE(parseInt(Page)))
      return parseInt(Page)
    }
    return 1
  }
  const { data =  new ListSimplePokemon(), isFetching } = useFetchSimplePokemonQuery({offset: (actualPage() - 1) * itemsPerPage, limit: itemsPerPage})

  if (!isFetching) {
    dispatch(PAGINATION_RANGE({ totalItems: data.count, actualPage: actualPage() }))
  }

  const changePage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() })
    // dispatch(PAGINATION_RANGE({ totalItems: data.count, actualPage: newPage }))
  }

  return (
    <div className='container'>
      <h1>List of Pokemon</h1>
      Number of pokemons fetched: <b>{data?.results.length}</b>
      { !isFetching
        ? (<table className='table'>
          <tr className='table__head'>
            <th className='table__head-col'>Nº</th>
            <th className='table__head-col'>Name</th>
            <th className='table__head-col'>Image</th>
          </tr>
          {data.results.map((poke, index) => (
            <tr className='table__row' key={ index }>
              <td className='table__col table__col--center'>{ (index + 1) * actualPage() }</td>
              <td className='table__col table__col--center'>{ poke.name }</td>
              <td className='table__col table__col--center'> <PokeImage name={ poke.name } /> </td>
            </tr>
          ))}
        </table>)
        : (<h2>Loading ...</h2>)
      }
      <Pagination changePage={ changePage } toLink='/Pokemon' itemsName='Pokemon' />
    </div>
  )
}

export default PokeListComponent
