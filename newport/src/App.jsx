import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="home" className='home'>
        <NavBar></NavBar>
      </div>
    </>
  )
}

export default App
