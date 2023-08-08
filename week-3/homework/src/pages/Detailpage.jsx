import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Detailpage() {
  const navigate = useNavigate()
  const params = useParams()

  const detailTodo = useSelector((state) => {
    return state.todos.filter((item) => item.id === params.id)
  })

  // .filter((item) => item.id === params.id) 이 부분을 따로 변수로
  console.log(detailTodo)
  return (
    <div>
      <div>
        {detailTodo[0].id}
        <br />
        {detailTodo[0].userName}
        <br />
        {detailTodo[0].title}
        <br />
        {detailTodo[0].desc}
        <br />
        {detailTodo[0].isDone ? '완료' : '진행중'}
        <br />
        <button onClick={() => navigate('/list')}>뒤로가기</button>
      </div>
    </div>
  )
}

export default Detailpage
