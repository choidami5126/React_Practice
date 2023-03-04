import './App.css'

function App() {
  return (
    <div className="Document">
      <h1>To Do List</h1>
      <form className="InputArea">
        <label for="input_title">제목 </label>
        <input type="text" id="input_title" name="제목"></input>
        <br />
        <label for="input_comment">내용 </label>
        <input type="text" id="input_comment" name="내용"></input>
        <div className="button">
          <button>제출</button>
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
