import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Intro from './assets/Components/Intro/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-base-100">
        <Header></Header>
        <Intro></Intro>
        <Outlet></Outlet>
    </div>
  )
}

export default App
