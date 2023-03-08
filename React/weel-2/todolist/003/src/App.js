import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from './redux/modules/todolist'
import { Box, Box_Area, Main_Layout } from './styled-components'

function App() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const updates = { title, comment }

  return (
    <Main_Layout>
      <div>My Todo List byReact</div>
      <div>
        제목
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        내용
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        <br />
        <button
          onClick={() => {
            dispatch(addTodo(updates))
            setTitle(``)
            setComment(``)
          }}
        >
          기록하기
        </button>
      </div>
      <div>
        <h3>Doing...</h3>
        <Box_Area>
          {todos.map((item) =>
            item.isdone ? null : (
              <Box key={item.id}>
                {item.title}
                {item.comment}
                <button
                  onClick={(e) => {
                    dispatch(doneTodo(item))
                  }}
                >
                  {item.isdone ? '취소' : '완료'}
                </button>
                <button
                  onClick={(e) => {
                    dispatch(deleteTodo(item))
                  }}
                >
                  삭제
                </button>
              </Box>
            )
          )}
        </Box_Area>
      </div>

      <div>
        <h3>Done</h3>
        <Box_Area>
          {todos.map((item) =>
            item.isdone ? (
              <Box key={item.id}>
                {item.title}
                {item.comment}
                <button
                  onClick={(e) => {
                    dispatch(doneTodo(item))
                  }}
                >
                  {item.isdone ? '취소' : '완료'}
                </button>
                <button
                  onClick={(e) => {
                    dispatch(deleteTodo(item))
                  }}
                >
                  삭제
                </button>
              </Box>
            ) : null
          )}
        </Box_Area>
      </div>
    </Main_Layout>
  )
}

export default App
