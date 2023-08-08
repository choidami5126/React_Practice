// 어떤 정보를 넣어야 하죠 ?
const ADD_TODO = 'app/todos/ADD_TODO'
const DELETE_TODO = 'app/todos/DELETE_TODO'
const DONE_TODO = 'app/todos/DONE_TODO'
const GET_TODO_BY_ID = 'app/todos/GET_TODO_BY_ID'

//action value/ action creator  / initialState // reducer

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  }
}

export const getTodo = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  }
}

const initialState = [
  //   {
  //     id: 1,
  //     title: '최다미',
  //     comment: '고양이인가?',
  //     isdone: false,
  //   },
  //   { id: 2, title: '소문자e 최다현', comment: '사람인가?', isdone: true },
]

// store(reducers(r)) > ui 호출 > ui가 원하는 action을 디스패치로 전달 >을
// 현재 상황에서
// component = app.js = 왕 : 칼 가꾸시퐁
// dispatch = 신하 약간 파발마: 칼 만들어 오란다(payload 필요한 재료, 원하는ㄷ ㅣ자인같은 정보를 들고 "어떻게" 만들지에 대한 정보 들고)
// reducer = 대장간 : 칼만든다 ㄹㅇ 일하는새기는 이새기다.

// state = todolist, action = 하고싶은일.. (payload 담고있는 친구)

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const randomBytes = new Uint8Array(30)
      window.crypto.getRandomValues(randomBytes)

      const submit = {
        id: randomBytes,
        title: action.payload.title,
        comment: action.payload.comment,
        isdone: false,
      }
      return [...state, submit]

    case DELETE_TODO:
      const delete_list = state.filter((item) => item.id !== action.payload.id)
      return delete_list

    case DONE_TODO:
      const donelist = state.map((item) => (item.id === action.payload.id ? { ...item, isdone: !item.isdone } : item))
      return donelist
    default:
      return state

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload
        }),
      }
  }
}

export default todos
