import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import api from './axios/api'

function App() {
  const [todos, setTodos] = useState(null)
  const [targetId, setTargetId] = useState('')
  const [contents, setContents] = useState('')

  const [inputValue, setInputValue] = useState({
    // json, nsql 방식은 id를 자동으로 설정해줌
    title: '',
  })

  const fetchTodos = async () => {
    // const { data } = await axios.get('http://localhost:4001/todos')
    const { data } = await api.get('/todos')
    setTodos(data)
  }

  // 추가 함수
  const onSubmitHandler = async () => {
    api.post('/todos', inputValue)
    setTodos([...todos, inputValue])
    fetchTodos()
  }

  // 삭제 함수
  const onDeleteButtonClickHandler = async (id) => {
    api.delete(`/todos/${id}`)
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  }

  // 수정 함수
  const onUpdateButtonClickHandler = async () => {
    api.patch(`/todos/${targetId}`, {
      title: contents,
    })
    setTodos(
      todos.map((item) => {
        if (item.id == targetId) {
          return { ...todos, title: contents }
          // todos는 그대로 매핑해주고, title만 contents로 바꿔줘
        } else {
          return item
        }
      })
    )
  }

  useEffect(() => {
    // db로부터 값을 가져올 것이다.
    fetchTodos()
  }, [])

  return (
    <>
      <div>
        {/* {수정 영역} */}
        <input
          placeholder="수정할 ID"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value)
          }}
        />
        <input
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value)
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/* {INPUT 영역} */}
        <form
          onSubmit={(e) => {
            e.preventDefault()

            // 버튼 클릭 시, input에 들어있는 값(state)을 이용하여 DB에 저장(post 요청)
            onSubmitHandler()
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) =>
              setInputValue({
                title: e.target.value,
              })
            }
          />
          <button>추가</button>
        </form>
      </div>
      <div>
        {/* {DATA 영역} */}
        {todos?.map((item) => {
          // async 비동기 통신이기에 첫 렌더링 시 뷰보다 느림
          // 초기값이 null임으로 읽을 수 없는 에러 발생
          // 따라서 '?'체이닝 옵션을 넣어줌
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;<button onClick={() => onDeleteButtonClickHandler(item.id)}>삭제</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
