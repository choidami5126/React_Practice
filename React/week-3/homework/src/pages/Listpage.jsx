import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteTodo, switchTodo } from '../redux/modules/todos'

const StyledCards = styled.div`
  max-width: 1000px;
  min-width: none;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 10px;
`

const StyledCard = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid black;

  padding: 10px;
`

function Listpage() {
  const todos = useSelector((state) => state.todos)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const detailViewHandler = (id) => {
    navigate(`/detail/${id}`)
  }

  const fetchTodos = async () => {
    axios.axios
  }

  return (
    <div>
      <button onClick={() => navigate('/submit')}>작성하기</button>
      <h3>진행중</h3>
      <StyledCards>
        {todos.map((item) => {
          return item.isDone ? null : (
            <StyledCard key={item.id}>
              이름 : {item.userName}
              <br />
              제목 : {item.title}
              <br />
              내용 : {item.desc}
              <br />
              <button onClick={() => dispatch(switchTodo(item.id))}>{item.isDone ? '취소' : '완료'}</button>
              <button onClick={() => dispatch(deleteTodo(item.id))}>삭제</button>
              <br />
              <button onClick={() => detailViewHandler(item.id)}>상세보기</button>
            </StyledCard>
          )
        })}
      </StyledCards>
      <div>
        <h3>완료</h3>
        <StyledCards>
          {todos.map((item) => {
            return item.isDone ? (
              <StyledCard key={item.id}>
                이름 : {item.userName}
                <br />
                제목 : {item.title}
                <br />
                내용 : {item.desc}
                <br />
                <button onClick={() => dispatch(switchTodo(item.id))}>{item.isDone ? '취소' : '완료'}</button>
                <button onClick={() => dispatch(deleteTodo(item.id))}>삭제</button>
                <br />
                <button onClick={() => detailViewHandler(item.id)}>상세보기</button>
              </StyledCard>
            ) : null
          })}
        </StyledCards>
      </div>
    </div>
  )
}

export default Listpage
