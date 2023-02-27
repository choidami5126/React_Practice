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
  const [fruit, setFruit] = useState('')

  return (
    <div>
      과일 : {''}
      <input
        value={fruit}
        onChange={function (event) {
          // console.log(event.target.value);
          setFruit(event.target.value);
        }}
      />
      <br /> <br />
      {fruit}
    </div>
  );
}

export default App