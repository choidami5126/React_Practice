import { useState } from 'react'
import './App.css'

function App() {
  const [todolist, setTodolist] = useState([])
  const [done_List, setDone_List] = useState([])
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const titleaddhandler = (event) => {
    setTitle(event.target.value)
  }

  const commentaddhandler = (event) => {
    setComment(event.target.value)
  }

  const resetBlank = () => {
    setTitle('')
    setComment('')
  }

  const addtodolist = () => {
    if (title === '' || comment === '') {
      alert('빈칸을 입력해주세요.')
      resetBlank()
    } else {
      const addtodolist = {
        num: todolist.length + 1,
        title,
        comment,
        done: 0,
      }
      setTodolist([...todolist, addtodolist])
      resetBlank()
    }
  }

  const removeListHandler = (num) => {
    const removeList = todolist.filter((item) => item.num !== num)
    setTodolist(removeList)
  }

  const doneButtonHandler = (index) => {
    const done_List = [...todolist]
    done_List[index].done = 1
    setTodolist(done_List)
  }
}

return (
  <div className="MainLayout">
    <div className="TopBar">MyTodoList React</div>
    <div className="InputBar">
      <div>
        제목 <input value={title} onChange={titleaddhandler} id="input_title" />
      </div>
      <div>
        내용 <input value={comment} onChange={commentaddhandler} id="input_comment" />
      </div>
      <div>
        <button onClick={addtodolist}>추가하기</button>
      </div>
    </div>
    <div className="RunningArea">
      <div>가보자고</div>
      {todolist.map((item) => (
        <div className="todolist">
          {item.title}
          <br />
          {item.comment}
          <br />
          <button onClick={() => removeListHandler(item.num)}>삭제</button>
          <button onClick={() => doneButtonHandler(item.num)}>완료</button>
        </div>
      ))}
    </div>
    <div className="DoneArea">
      <div>완료!</div>
      {done_List.map((item) => {
        return (
          <div className="donelist">
            {item.title}
            <br />
            {item.comment}
            <br />
            <button>삭제</button>
            <button>취소</button>
          </div>
        )
      })}
    </div>
  </div>
)
export default App
