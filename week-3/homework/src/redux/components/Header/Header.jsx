import React from 'react'
import { StyledHeader } from './styles'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <StyledHeader>
      <AiFillHome
        onClick={() => {
          navigate('/')
        }}
      />
      <p>React App</p>
    </StyledHeader>
  )
}

export default Header
