import ToDoBox from './ToDoBox'

const ToDoArea = ({ todo_list, doneButtonHandler, removeButtonHandler }) => {
  return (
    <div className="todoarea">
      {todo_list.map((item) => (
        <ToDoBox key={item.id} item={item} doneButtonHandler={doneButtonHandler} removeButtonHandler={removeButtonHandler} />
      ))}
    </div>
  )
}

export default ToDoArea
