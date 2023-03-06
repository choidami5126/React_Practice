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
    case 'PLUS_ONE':
      return {
        number: state.number + 1,
      }
    case 'MINUS_ONE':
      return {
        number: state.number - 1,
      }
    // 객체 형태를 맞춰줘야함
    default:
      return state
  }
}

export default counter
