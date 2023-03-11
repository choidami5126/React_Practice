// action value
const PLUS_ONE = 'counter/PLUS_ONE'
const MINUS_ONE = 'counter/MINUS_ONE'
const PLUS_N = 'counter/PLUS_N'
const MINUS_N = 'counter/MINUS_N'

// action creater : action value를 리턴하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
}

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  }
}

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  }
}

const initialState = {
  number: 0,
}
// const [number, setNumber] = (0)

// reducer : state에 변화를 일으키는 함수이다.
// (1) state를 action의 type에 따라 변경하는 함수이다
const counter = (state = initialState, action) => {
  // action은 객체 형태로 들어옴, action의 type과 value를 가지고 있음
  // action : state를 어떻게 수정할 것인지 표현하는 객체
  switch (action.type) {
    // action에 있는 type에 따라서 어떤 작업을 수행할 것이다.
    case PLUS_ONE:
      return {
        number: state.number + 1,
      }
    case MINUS_ONE:
      return {
        number: state.number - 1,
      }
    case PLUS_N:
      return {
        number: state.number + action.payload,
      }
    case MINUS_N:
      return {
        number: state.number - action.payload,
      }
    // 객체 형태를 맞춰줘야함
    default:
      return state
  }
}

export default counter
