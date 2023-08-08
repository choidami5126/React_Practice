import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getTodo } from '../redux/modules/todolist'

function Detail() {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todos.todo)
  const params = useParams()

  const navigate = useNavigate()
  const { id } = useParams()

  const todoItem = todo.find((item) => String(item.id) === String(params.id))

  useEffect(() => {
    dispatch(getTodo(id))
  }, [dispatch, id])

  return (
    <div>
      <div>ID : {todoItem.id}</div>
      <div>
        {todoItem.title}
        <br />
        {todoItem.comment}
        <button onClick={navigate('/')}>뒤로가기</button>
      </div>
    </div>
  )
}

export default Detail
