import './App.css'
import { Main_Layout, Info, MyTodoList, MadebyRecat, Inputbar, Box, Box_area } from './Styled-Components'
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const InputTitleHandler = (event) => setTitle(event.target.value)
  const InputCommentHandler = (event) => setComment(event.target.value)

  const Rest_Input = () => {
    setTitle('')
    setComment('')
  }

  const SubmitButtonHandler = () => {
    const randomBytes = new Uint8Array(30)
    window.crypto.getRandomValues(randomBytes)

    const submit = {
      id: randomBytes,
      title,
      comment,
      isdone: false,
    }

    setList([...list, submit])
    Rest_Input()
  }
  console.log(list)

  const DoneButtonHandler = (id) => {
    console.log(id)
    const Done_box = list.find((item) => item.id === id)
    Done_box.isdone = true

    setList([...list])
  }
  console.log(list)

  return (
    <Main_Layout>
      <Info>
        <MyTodoList>My Todo List</MyTodoList>
        <MadebyRecat>made by React</MadebyRecat>
      </Info>
      <Inputbar>
        제목
        <br />
        <input type="text" value={title} onChange={InputTitleHandler} />
        <br />
        내용
        <br />
        <input type="text" value={comment} onChange={InputCommentHandler} />
        <br />
        <button onClick={SubmitButtonHandler}>기록하기</button>
      </Inputbar>
      <div>
        <h3>Doing...</h3>
      </div>
      <Box_area>
        {list.map((item) => {
          return (
            <Box key={item.id}>
              {item.title}
              <br />
              {item.comment}
              <br />
              <button onClick={DoneButtonHandler}>완료</button>
              <button>삭제</button>
            </Box>
          )
        })}
      </Box_area>
      <div>
        <h3>Done</h3>
      </div>
    </Main_Layout>
  )
}

export default App
