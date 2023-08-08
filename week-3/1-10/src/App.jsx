import './App.css'
import useInput from './hooks/useinfut'

function App() {
  const [name, onChangeNameHandler] = useInput()
  const [password, onChangePasswordHandler] = useInput()

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="password" value={password} onChange={onChangePasswordHandler} />
    </div>
  )
}

export default App
