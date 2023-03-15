import { useState } from 'react'

const useInput = () => {
  // state
  const [value, setvalue] = useState('')

  // handler
  const handler = (e) => {
    setvalue(e.target.value)
  }

  return [value, handler]
}

export default useInput
