import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const counter = useSelector((state) => {
    // store 안에 있는 state 전체를 뜻함
    return state.counter
  })
  // dispatch를 가져와보자
  const dispatch = useDispatch()
  console.log('counter', counter.number)
  // 매개변수로 콜백함수 들어옴
  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <button
        onClick={() => {
          // +1을 해주는 로직을 써준다.
          dispatch({
            type: 'PLUS_ONE',
          })
          // 인자로 action 객체를 넣어줘야 함
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // -1을 해주는 로직을 써준다.
          dispatch({
            type: 'MINUS_ONE',
          })
          // 인자로 action 객체를 넣어줘야 함
        }}
      >
        -
      </button>
    </>
  )
}

export default App
