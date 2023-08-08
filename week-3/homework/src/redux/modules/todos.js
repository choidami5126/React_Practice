import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = [
  {
    id: uuidv4(),
    userName: '김덕배',
    title: '3주차 과제하기',
    desc: '모든 것을 섞은 3주차 과제를 해보자',
    isDone: false,
  },
  {
    id: uuidv4(),
    userName: '김이박',
    title: '3주차 과제하기',
    desc: '모든 것을 섞은 3주차 과제를 해보자',
    isDone: true,
  },
  {
    id: uuidv4(),
    userName: '최다현',
    title: '3주차 과제하기',
    desc: '모든 것을 섞은 3주차 과제를 해보자',
    isDone: false,
  },
  {
    id: uuidv4(),
    userName: '최미미',
    title: '3주차 과제하기',
    desc: '모든 것을 섞은 3주차 과제를 해보자',
    isDone: true,
  },
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone }
        } else {
          return item
        }
      })
    },
  },
})

export default todoSlice.reducer
export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions
