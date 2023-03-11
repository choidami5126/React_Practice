// action value
const PLUS_ONE = 'counter/PLUS_ONE'
const MINUS_ONE = 'counter/MINUS_ONE'

// action creator : action value를 return 하는 함수
// 컴포넌트에서 dispatch에 들어갈 내용을 함수화 함
export const plusOne = () => {
  // action 객체를 return함
  return {
    type: PLUS_ONE,
  }
}

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}

const initialState = {
  number: 0,
}

const counter = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case PLUS_ONE:
      // action 객체를 던져줄 때 액션의 type을 +1으로 해서 던져주겠다
      return {
        number: state.number + 1,
      }
    case MINUS_ONE:
      return {
        number: state.number - 1,
      }
    default:
      return state
  }
}

export default counter
