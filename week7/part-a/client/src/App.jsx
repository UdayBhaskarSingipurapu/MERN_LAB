import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message , setMessage] = useState("")

  async function getData() {
    await axios.get('http://localhost:8080/getMessage')
      .then((res) => {
        console.log(res)
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err);
      })
  }

  return (
    <div>
      <h1>React and Express Communication</h1>
      <button onClick={getData}>Click to get message from backend</button>
      <p>{message}</p>
    </div>
  )
}

export default App
