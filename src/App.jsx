import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [count, setCount] = useState(0);
  const[isModalOpen,setIsModalOpen] = useState(false);

  const increment =()=>{
    setCount(count+1);
  }
  return (
    <>
      
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={increment}>increment</button>
      </div>
      <button onClick={()=>setIsModalOpen(true)}>open modal</button>
      <h1>implementing A</h1>
      <h1>implementing B</h1>
      <h1>implementing C</h1>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            width: "100px",
            height:"100px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          },
        }}
      >
        <h1 style={{ color:'black'}}>count value is{count}</h1>
        <button
          style={{
            backgroundColor: "white",
            color: "red",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
      
    </>
  )
}

export default App
