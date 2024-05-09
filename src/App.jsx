import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import CV from './components/cv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar />
     <CV />
    </>
  )
}

export default App
