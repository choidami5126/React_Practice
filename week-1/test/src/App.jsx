import { useState } from 'react'
import './App.css'

function App() {
  const [todo_list, setTodo_list] = useState([])
  const [comment, setComment] = useState('')

  const inputCommentHandler = (event) => setComment(event.target.value)

  const addButtonHandler = () => {
    const randomBytes = new Uint8Array(16)
    window.crypto.getRandomValues(randomBytes)

    const sudmit = {
      id: randomBytes,
      comment,
    }
    setTodo_list([...todo_list, sudmit])
  }

  return (
    <div className="Mainlayout">
      <label>
        <input type="text" value={comment} onChange={inputCommentHandler}></input>
        <button onClick={addButtonHandler}>추가하기</button>
      </label>
      <h1>
        <b>Todo List</b>
      </h1>
      <div className="todoarea">
        {todo_list.map((item) => (
          <div className="todobox">{item.comment}</div>
        ))}
      </div>
    </div>
  )
}

export default App
