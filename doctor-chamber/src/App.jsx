import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  )
}

export default App
