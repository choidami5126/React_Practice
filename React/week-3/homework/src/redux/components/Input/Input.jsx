import React from 'react'
import { StyledForm } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../../modules/todos'
import { useNavigate } from 'react-router-dom'

function Input() {
  const [userName, setUserName] = useState()
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()

  const disptch = useDispatch()
  const navigate = useNavigate()

  const SubmitButtonClickHandler = (e) => {
    e.preventDefault()

    const newTodo = {
      id: uuidv4(),
      userName,
      title,
      desc,
      isDone: false,
    }

    disptch(addTodo(newTodo))

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
        <button type="submit">기록하기</button>
        <br />
      </StyledForm>
      <button onClick={() => navigate('/list')}>리스트로 이동</button>
    </div>
  )
}

export default Input
