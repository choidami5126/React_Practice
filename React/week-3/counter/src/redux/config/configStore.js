import { createStore } from 'redux'
import { combineReducers } from 'redux'
import counter from '../modules/counter'
import users from '../modules/users'
import configureStore

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
//   users,
// })
// const store = createStore(rootReducer)

// TODO : Redux Toolkit
const store = configureStore({
  // 객체가 들어감
  reducer: {
    // reducer가 여러개일 수 있어 한 번더 객체로 묶어줌
    counter: counter,
  },
})

export default store
