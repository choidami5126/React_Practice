import { useState } from 'react'
import './App.css'
import ToDoArea from './components/ToDoArea'

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
    const randomBytes = new Uint8Array(30) // typedarray
    window.crypto.getRandomValues(randomBytes)

    const sudmit = {
      id: randomBytes,
      title,
      comment,
      done: false,
    }
    setTodo_list([...todo_list, sudmit])
    resetBlank()
  }
  console.log(todo_list)
  const removeButtonHandler = (id) => {
    const remove_todo_list = todo_list.filter((item) => item.id !== id)
    setTodo_list(remove_todo_list)
  }

  const doneButtonHandler = (id) => {
    const done_item = todo_list.find((item) => item.id === id)
    setDone_list([...done_list, done_item])
    removeButtonHandler(id)
  }

  const done_removeButtonHandler = (id) => {
    const remove_done_list = done_list.filter((item) => item.id !== id)
    setDone_list(remove_done_list)
  }

  const cancelButtonHandler = (id) => {
    const cancel_item = done_list.find((item) => item.id === id)
    setTodo_list([...todo_list, cancel_item])
    done_removeButtonHandler(id)
  }

  return (
    <div className="layout">
      <div className="infobar">
        <h1 className="test_-center">
          <b>MyToDoList</b>
        </h1>
        <h3>
          by<b style={{ color: 'blue' }}>React</b>
        </h3>
      </div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <h4>
              <b>목표</b>
            </h4>
          </label>
          <input type="text" className="form-control" id="exampleInputEmail1" value={title} onChange={inputTitleHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            <br />
            <h4>
              <b>내용</b>
            </h4>
          </label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={comment} onChange={inputCommentHandler} />
        </div>
        <div className="form_button">
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={inputButtonHandler}>
            등록하기
          </button>
        </div>
      </form>
      <div className="todotop">
        <h3>
          <b>Doing...🏃</b>
        </h3>
      </div>
      <ToDoArea
        todo_list={todo_list}
        doneButtonHandler={doneButtonHandler}
        removeButtonHandler={removeButtonHandler}
        c
        // key={item.id}
        // item={item}
      />
      {/* <div className="todoarea">
        {todo_list.map((item) => (
          <Todobox key={item.id} item={item} doneButtonHandler={doneButtonHandler} removeButtonHandler={removeButtonHandler} />
        ))}
      </div> */}
      <div className="donetop">
        <h3>
          <b>Done 🏆</b>
        </h3>
      </div>
      <div className="donearea">
        {done_list.map((item) => {
          return (
            <div className="donebox">
              <div className="done_comment">
                <h4>
                  <b>{item.title}</b>
                </h4>
                <br />
                <h5>{item.comment}</h5>
              </div>
              <div className="done_button">
                <button type="button" className="btn btn-outline-secondary" onClick={() => cancelButtonHandler(item.id)}>
                  취소
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={() => done_removeButtonHandler(item.id)}>
                  삭제
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
// const uuidv4 = require('uuid/v4')

{
  /* <input type='text' maxlength='5' />
.selector {word-break:break-all;} */
}

//키값 유니크하게 주기
//로직과 뷰 분리
// 효율적인 부모<>자식 컴포넌트 분리 리렌더링 최소화
