import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage/LoginPage'
import { ToastContainer } from 'react-toastify'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to={'/login'}>Login Now</Link>
      <Link to={'/register'}>Register Now</Link>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
