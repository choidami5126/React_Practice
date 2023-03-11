import React from 'react'
import { Main_Layout } from '../styled-components'
import List from '../components/List'
import Input from '../components/InPut'

function Home() {
  return (
    <Main_Layout>
      <div>My Todo List byReact</div>
      <Input />
      <List />
    </Main_Layout>
  )
}

export default Home
