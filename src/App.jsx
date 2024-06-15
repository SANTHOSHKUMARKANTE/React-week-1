import { useState } from 'react'
import './App.css'
import Form from './assets/Components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Form/>
    </div>
  )
}

export default App
