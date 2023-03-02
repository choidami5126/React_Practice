const ToDoBox = ({ item, doneButtonHandler, removeButtonHandler }) => {
  return (
    <div className="todobox">
      <div className="todo_comment">
        <h4>
          <b>{item.title}</b>
        </h4>
        <br />
        <h5>{item.comment}</h5>
      </div>
      <div className="todo_button">
        <button type="button" className="btn btn-outline-success" onClick={() => doneButtonHandler(item.id)}>
          성공
        </button>
        <button type="button" className="btn btn-outline-danger" onClick={() => removeButtonHandler(item.id)}>
          삭제
        </button>
      </div>
    </div>
  )
}

export default ToDoBox
