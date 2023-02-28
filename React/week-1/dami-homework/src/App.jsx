import { useState } from 'react';
import './App.css';


function App() {

  const [todolist, setTodolist] = useState([
    // { num: 1, title: 'EX', comment: 'ex', done: 0 }
  ])

  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const titleaddhandler = (event) => {
    setTitle(event.target.value);
  }
  const commentaddhandler = (event) => {
    setComment(event.target.value);
  }
  const addtodolist = () => {
    if(title === '' || comment === '') {
      alert('빈칸을 입력해주세요.')
      setTitle('');
      setComment('');
    } else {
      const addtodolist = {
        num: todolist.length + 1,
        title,
        comment,
        done: 0
      }
      setTodolist([...todolist, addtodolist]);
      setTitle('');
      setComment('');
    }
  }
    const removeListHandler = (num) => {
      const removeList = todolist.filter((item) => item.num !== num);
      setTodolist(removeList);
    }
    return (
      <div className='MainLayout'>
        <div className='TopBar'>
          MyTodoList
          React
        </div>
        <div className='InputBar'>
          <div>제목 <input
            value={title}
            onChange={titleaddhandler}
            id='input_title'
          /></div>
          <div>내용 <input
            value={comment}
            onChange={commentaddhandler}
            id='input_comment'
          /></div>
          <div>
            <button onClick={addtodolist}>추가하기</button>
          </div>
        </div>
        <div className='RunningArea'>
          <div>가보자고</div>
          {
            todolist.map((item) => {
              return (
                <div className='todolist'>
                  {item.title}<br />
                  {item.comment}<br />
                  <button onClick={() => removeListHandler(item.num)}>삭제</button>
                  <button>완료</button>
                </div>
              )
            })
          }
        </div>
        <div className='DoneArea'>
          <div>완료!</div>
        </div>
      </div>
    );
  }
  export default App;
