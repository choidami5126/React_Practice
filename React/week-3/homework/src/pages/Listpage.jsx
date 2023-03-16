import axios from 'axios'
import api from '../axios/api'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  const [todos, setTodos] = useState(null)
  const navigate = useNavigate()
  const [targetId, setTargetID] = useState('')
  const [changeTitle, setChangeTitle] = useState('')
  const [changeDesc, setChangeDesc] = useState('')

  const detailViewHandler = (id) => {
    navigate(`/detail/${id}`)
  }

  const fetchTodos = async () => {
    const { data } = await api.get('/todos')
    console.log('data', data)
    setTodos(data)
  }

  const deleteButtonClickHandler = async (id) => {
    await api.delete(`/todos/${id}`)
    fetchTodos()
  }

  const modifyButtonClickHandler = async () => {
    await api.patch(`/todos/${targetId}`, {
      title: changeTitle,
      desc: changeDesc,
    })
    fetchTodos()
  }

  const switchButtonHandler = async (id) => {
    const item = todos.find((item) => item.id === id)
    await api.patch(`/todos/${id}`, {
      isDone: !item.isDone,
    })
    fetchTodos()
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <button onClick={() => navigate('/submit')}>작성하러 가기</button>
      <br />
      <input type="text" placeholder="수정할 아이디" value={targetId} onChange={(e) => setTargetID(e.target.value)} />
      <input type="text" placeholder="수정할 제목" value={changeTitle} onChange={(e) => setChangeTitle(e.target.value)} />
      <input type="text" placeholder="수정할 내용" value={changeDesc} onChange={(e) => setChangeDesc(e.target.value)} />
      <button onClick={modifyButtonClickHandler}>수정</button>
      <br />
      <br />
      <h3>진행중</h3>
      <StyledCards>
        {todos?.map((item) => {
          return item.isDone ? null : (
            <StyledCard key={item.id}>
              아이디 : {item.id}
              <br />
              이름 : {item.userName}
              <br />
              제목 : {item.title}
              <br />
              내용 : {item.desc}
              <br />
              <button onClick={() => switchButtonHandler(item.id)}>{item.isDone ? '취소' : '완료'}</button>
              <button onClick={() => deleteButtonClickHandler(item.id)}>삭제</button>
              <br />
              <button onClick={() => detailViewHandler(item.id)}>상세보기</button>
            </StyledCard>
          )
        })}
      </StyledCards>
      <div>
        <h3>완료</h3>
        <StyledCards>
          {todos?.map((item) => {
            return item.isDone ? (
              <StyledCard key={item.id}>
                아이디 : {item.id}
                <br />
                이름 : {item.userName}
                <br />
                제목 : {item.title}
                <br />
                내용 : {item.desc}
                <br />
                <button onClick={() => switchButtonHandler(item.id)}>{item.isDone ? '취소' : '완료'}</button>
                <button onClick={() => deleteButtonClickHandler(item.id)}>삭제</button>
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
