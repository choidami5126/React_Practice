import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { plusOne, minusOne } from './redux/config/modules/counter'

function App() {
  const counter = useSelector((state) => {
    return state.counter
  })
  const dispatch = useDispatch()

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <button
        onClick={() => {
          dispatch(plusOne())
          // dispatch에 인자로 action객체를 넣어줘야 한다.
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne())
        }}
      >
        -
      </button>
    </>
  )
}

export default App
