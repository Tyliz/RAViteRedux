import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface SessionState {
  lstPage: number[]
  actualPage: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
}

interface PaginationParams {
  actualPage: number
  totalItems: number
}

const initialState: SessionState = {
  lstPage: [],
  actualPage: 1,
  totalPages: 1,
  itemsPerPage: 10,
  totalItems: 0,
}

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    RESTART_PAGINATOR: (state: SessionState) => {
      state.lstPage = []
    },
    SET_PAGE: (state: SessionState, action: PayloadAction<number | null>) => {
      if (action.payload === null && state.actualPage !== 1) {
        state.actualPage = 1
      } else if (action.payload !== null && state.actualPage != action.payload) {
        state.actualPage = action.payload
      }
    },
    PAGINATION_RANGE: (state: SessionState, action: PayloadAction<PaginationParams>) => {
      let pageInit = 0
      let pageEnd = 0
      state.lstPage = []
      const pages = []

      const { actualPage, totalItems } = action.payload

      state.totalItems = totalItems
      state.actualPage = actualPage
      state.totalPages = Math.ceil(totalItems / state.itemsPerPage)

      const totalPages = state.totalPages

      if (totalPages > 10) {
        if ((actualPage > 5) && (actualPage + 4 < totalPages)) {
          pageInit = actualPage - 4
          pageEnd = actualPage + 4
        } else if(actualPage <= 5) {
          pageInit = 1
          pageEnd = 10
        } else {
          pageInit = totalPages - 9
          pageEnd = totalPages
        }
      } else {
        pageInit = 1
        pageEnd = totalPages
      }

      for (let i = pageInit; i <= pageEnd; i++) {
        pages.push(i)
      }
      state.lstPage = pages
    }
  }
})


export const {
  RESTART_PAGINATOR,
  SET_PAGE,
  PAGINATION_RANGE,
} = PaginationSlice.actions

export default PaginationSlice.reducer
