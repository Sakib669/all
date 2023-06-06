import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
