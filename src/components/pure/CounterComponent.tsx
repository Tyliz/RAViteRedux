import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ADD_AMOUNT, DECREMENTED, INCREMENTED, RESET } from '../../features/counter/counterSlice'

const CounterComponent = (): React.JSX.Element => {
  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const btnAddClick = () => {
    dispatch(INCREMENTED())
  }

  const btnSubstractClick = () => {
    dispatch(DECREMENTED())
  }

  const btnAddAmountClick = () => {
    dispatch(ADD_AMOUNT(10))
  }

  const btnResetClick = () => {
    dispatch(RESET())
  }


  return (
    <div className="card">
      <button onClick={ btnAddClick }>
        Add 1
      </button>
      <button onClick={ btnSubstractClick }>
        substract 1
      </button>
      <button onClick={ btnAddAmountClick }>
        Add 10
      </button>
      <button onClick={ btnResetClick }>
        Reset
      </button>
      <p>
        Count is <b>{value}</b>
      </p>
    </div>
  )
}

export default CounterComponent
