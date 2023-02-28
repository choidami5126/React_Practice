import { useState } from 'react'
import './App.css'

function App() {
  const [todo_list, setTodo_list] = useState([])
  const [done_list, setDone_list] = useState([])
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const inputTitleHandler = (event) => setTitle(event.target.value)
  const inputCommentHandler = (event) => setComment(event.target.value)
  const resetBlank = () => {
    setTitle('')
    setComment('')
  }

  const inputButtonHandler = () => {
    const add_list = {
      num: todo_list.length + 1,
      title,
      comment,
      done: 0,
    }
    setTodo_list([...todo_list, add_list])
    resetBlank()
  }
  return (
    <div className="layout">
      <div className="infobar">MyToDoList React</div>
      <div className="inputbar">
        제목 <input value={title} onChange={inputTitleHandler}></input>
        내용 <input value={comment} onChange={inputCommentHandler}></input>
        <button onClick={inputButtonHandler}>입력하기</button>
      </div>
      <div className="todotop">진행중</div>
      <div className="todoarea">
        {todo_list.map((item) => {
          return (
            <div className="todobox">
              {item.title}
              <br />
              {item.comment}
              <br />
              <button>삭제</button>
              <button>완료</button>
            </div>
          )
        })}
      </div>
      <div className="donetop">완료</div>
      <div className="donearea"></div>
    </div>
  )
}

export default App
