import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Box_Area } from '../styled-components'
import { doneTodo, deleteTodo } from '../redux/modules/todolist'
import { Link } from 'react-router-dom'

const List = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <>
      <div>
        <h3>Doing...</h3>
        <Box_Area>
          {todos.map((item) =>
            item.isdone ? null : (
              <Box key={item.id}>
                {item.title}
                <br />
                {item.comment}
                <br />
                <Link to={`/${item.id}`} key={item.id}>
                  더보기
                </Link>
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
    </>
  )
}

export default List
