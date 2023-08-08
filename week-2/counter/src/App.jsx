import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { plusOne, minusOne, plusN, minusN } from './redux/modules/counter'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  const counter = useSelector((state) => {
    // store 안에 있는 state 전체를 뜻함
    return state.counter
  })
  // dispatch를 가져와보자
  const dispatch = useDispatch()
  // 매개변수로 콜백함수 들어옴
  // useEffect(() => {
  //   console.log('number ->' + number)
  // }, [number])

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            setNumber(+event.target.value)
          }}
        />
      </div>
      <button
        onClick={() => {
          // +1을 해주는 로직을 써준다.
          // dispatch({
          //   type: PLUS_ONE,
          // })
          // 인자로 action 객체를 넣어줘야 함

          dispatch(plusN(number))
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // -1을 해주는 로직을 써준다.
          // dispatch({
          //   type: MINUS_ONE,
          // })
          // 인자로 action 객체를 넣어줘야 함

          dispatch(minusN(number))
        }}
      >
        -
      </button>
    </>
  )
}

export default App
