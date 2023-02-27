import React, { useState } from 'react'

function App() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  console.log('id', id);
  console.log('pw', pw);
  
  // id 필드가 변경될 경우
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  }

  // pw 필드가 변경될 경우
  const onPwChangeHandler = (event) => {
    setPw(event.target.value);
  }
  return (
    <div>
      <div>
        아이디 : <input type = {'text'} value = {id} onChange = {onIdChangeHandler}></input>
      </div>
      <div>
        비밀번호 : <input type = {'password'} value = {pw} onChange = {onPwChangeHandler}></input>
      </div>
      <button onClick={() => {
        alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`);
        setId('');
        setPw('');
      }}>로그인</button>
    </div>
  )
}

export default App