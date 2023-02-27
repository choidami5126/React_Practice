import React, { useState } from 'react'

function App() {
  // state를 쓰는 목적은 UI를 바꾸기 위해서다!
  // hook
  // const [state, serState] = useState('initial value');
  // const [count, setCount] = useState(0);
  // const [todolist, setTodolist] = useState([]);
  // useState, useEffect, useContext, useMemo 등등의 Hook이 있음
  // useDispatch, useSele, ...
  // const [name, setName] = useState('최다현');
  // const [fruit, setFruit] = useState('')

  // return (
  //   <div>
  //     과일 : {''}
  //     <input
  //       value={fruit}
  //       onChange={function (event) {
  //         // console.log(event.target.value);
  //         setFruit(event.target.value);
  //       }}
  //     />
  //     <br /> <br />
  //     {fruit}
  //   </div>
  // );
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return(
    <div>
      <span>아이디 :</span>
      <input type={'text'}></input><br></br>
      <span>비밀번호 :</span>
      <input type={'password'}></input>
      <button onClick={
        function () {
          alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`)
        }
      }>로그인</button>
    </div>
  )
}

export default App