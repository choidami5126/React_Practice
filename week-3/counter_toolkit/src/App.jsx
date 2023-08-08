import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { plusNumber, minusNumber } from './redux/modules/counter'

function App() {
  const counter = useSelector((state) => state.counter.number)
  // console.log(counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>현재 카운트 : {counter}</div>
      <button
        onClick={() => {
          dispatch(plusNumber(1))
          // dispatch에 인자로 action객체를 넣어줘야 한다.
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusNumber(1))
        }}
      >
        -
      </button>
    </>
  )
}

export default App
