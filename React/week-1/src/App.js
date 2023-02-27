import React from 'react'

const App = () => {
  return <User>안녕하세요!</User>
}

function User(props) {
  console.log(props)
  return <div>{props.children}</div>;
}

export default App