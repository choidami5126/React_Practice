import { useState } from 'react'
import './App.css'

function App() {
  // 1. 제목, 내용 iuput 받은 내용을 제출하기 버튼을 누르면 배열에 저장한다.
  // 2. 배열의 내용을 ToDoArea에 표출한다.
  // 3. TodoCard 완료를 누르면, 해당 객체는 DoneArea에 DoneCard가 된다.
  // 4. TodoCard 삭제를 누르면, 배열에서 해당 객체를 삭제한다.
  // 5. DoneCard 취소를 누르면, ToDoArea에 TodoCard가 된다.
  // 6. DoneCard 삭제를 누르면, 배열에서 해당 객체를 삭제한다.

  const [contents_list, setContents_list] = useState([])
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const inputTitleHandler = (event) => setTitle(event.target.value)
  const inputCommentHandler = (event) => setComment(event.target.value)

  const submitButtonHandler = () => {
    const randomBytes = new Uint8Array(16)
    window.crypto.getRandomValues(randomBytes)

    const submit = {
      id: randomBytes.join(''),
      title,
      comment,
      isdone: false,
    }
    setContents_list([...contents_list, submit])
  }
  console.log(contents_list)

  return (
    <div className="Document">
      <h1>To Do List</h1>
      <form className="InputArea">
        <label htmlFor="input_title">제목 </label>
        <input type="text" id="input_title" name="제목" value={title} onChange={inputTitleHandler}></input>
        <br />
        <label htmlFor="input_comment">내용 </label>
        <input type="text" id="input_comment" name="내용" value={comment} onChange={inputCommentHandler}></input>
        <div className="button">
          <button onClick={submitButtonHandler}>제출</button>
        </div>
      </form>
      <div>
        <h3 className="ToDoBar">Doing...</h3>
        <div className="ToDoArea"></div>
        <h3 className="DoneBar">Done</h3>
        <div className="DoneArea"></div>
      </div>
    </div>
  )
}

export default App
