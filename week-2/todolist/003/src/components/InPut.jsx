import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/modules/todolist'
import { useState } from 'react'

const Input = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const updates = { title, comment }

  return (
    <div>
      제목
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      내용
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <br />
      <button
        onClick={() => {
          dispatch(addTodo(updates))
          setTitle(``)
          setComment(``)
        }}
      >
        기록하기
      </button>
    </div>
  )
}

export default Input
