import React from 'react'
import { StyledForm } from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Input() {
  const [userName, setUserName] = useState()
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()

  // const disptch = useDispatch()
  const navigate = useNavigate()

  const SubmitButtonClickHandler = async (e) => {
    e.preventDefault()

    const newTodo = {
      userName,
      title,
      desc,
      isDone: false,
    }

    await axios.post('http://localhost:4001/todos', newTodo)

    setUserName('')
    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <StyledForm onSubmit={SubmitButtonClickHandler}>
        이름
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        제목
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        내용
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button>기록하기</button>
        <br />
      </StyledForm>
      <button onClick={() => navigate('/list')}>리스트로 이동</button>
    </div>
  )
}

export default Input
