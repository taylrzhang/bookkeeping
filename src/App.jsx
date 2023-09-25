import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5>Bookkeeping</h5>
      <button id="addBtn" type="button" class="btn btn-link">create</button>
    </>
  )
}

export default App
