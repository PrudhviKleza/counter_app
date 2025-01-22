import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment =()=>{
    setCount(count+1);
  }
  return (
    <>
      
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={increment}>
          increment
        </button>
      </div>
      
    </>
  )
}

export default App
