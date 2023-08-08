import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledHome } from './styles'

function Home() {
  const navigate = useNavigate()

  return (
    <StyledHome>
      <button onClick={() => navigate('/submit')}>작성하기</button>
      <br />
      <button onClick={() => navigate('/list')}>리스트 조회</button>
    </StyledHome>
  )
}

export default Home
