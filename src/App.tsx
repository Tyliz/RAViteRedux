import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { ADD_AMOUNT, DECREMENTED, INCREMENTED, RESET } from './features/counter/counterSlice'

function App() {
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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
