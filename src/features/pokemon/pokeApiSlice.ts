import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../../classes/pokemon/pokemon'

export class SimplePokemon {
  name: string
  url: string

  constructor(name = '', url = '') {
    this.name = name
    this.url = url
  }
}

interface ListParams {
  offset: number
  limit: number
}

export class ListSimplePokemon {
  count: number
  next: string
  previous: string
  results: SimplePokemon[]

  constructor(count = 0, next = '', previous = '', results = []) {
    this.count = count
    this.next = next
    this.previous = previous
    this.results = results
  }
}

export const pokeApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
    prepareHeaders: (headers) => {
      // headers.set('x-api-key', API_KEY)
      return headers
    },
  }),
  endpoints: (builder) => {
    return {
      fetchSimplePokemon: builder.query<ListSimplePokemon, ListParams>({
        query: ({offset = 0, limit = 10}) => {
          return `/pokemon?offset=${offset}&limit=${limit}`
        }
      }),
      fetchSinglePokemon: builder.query<Pokemon, string|void>({
        query: (name: string) => {
          return `/pokemon/${name}`
        }
      }),
    }
  }
})


export const {
  useFetchSimplePokemonQuery,
  useFetchSinglePokemonQuery,
} = pokeApiSlice
