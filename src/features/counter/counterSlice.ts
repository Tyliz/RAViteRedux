// * DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    INCREMENTED: (state: CounterState) => {
      //* it's okay to do this because inner makes it inmutable under the hood
      state.value++
    },
    ADD_AMOUNT: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    // decrement
    DECREMENTED: (state: CounterState) => {
      state.value--
    },
    // reset
    RESET: (state: CounterState) => {
      state.value = 0
    },
  }
})


export const {
  INCREMENTED,
  ADD_AMOUNT,
  DECREMENTED,
  RESET,
} = CounterSlice.actions

export default CounterSlice.reducer
