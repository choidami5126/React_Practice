import { createStore } from 'redux'
import counter from '../modules/counter'
import { configureStore } from '@reduxjs/toolkit'

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
// })

// const store = createStore(rootReducer)

// TODO : Redux Toolkit
const store = configureStore({
  // configureStore는 API임
  reducer: {
    // reducer가 여려개일 수 있음으로 객체로 한 번더 묶어줌
    counter,
  },
})

export default store
