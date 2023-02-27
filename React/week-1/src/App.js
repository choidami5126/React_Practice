import React from 'react'

function App() {

  const number = 7;

  const ptagstyle = {
    color : 'blue',
  }
  return (
    <div className='test-class'>
    <p style={ptagstyle}>안녕하세요 최다현입니다.</p>
    <p style={
      ptagstyle
    }>
      {
      number > 10
      ? number + '는 10보다 크다'
      : number + '는 10보다 작다'
      }
      </p>
    </div>
  )
   
  
}

export default App