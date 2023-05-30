import { createSlice } from '@reduxjs/toolkit'


interface SessionState {
  isLogged: boolean
}

const initialState: SessionState = {
  isLogged: false,
}

const SessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // increment
    LOGIN: (state: SessionState) => {
      state.isLogged = true
    },
    LOGOUT: (state: SessionState) => {
      state.isLogged = false
    },
  }
})


export const {
  LOGIN,
  LOGOUT,
} = SessionSlice.actions

export default SessionSlice.reducer
