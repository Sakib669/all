import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <div className="w-full mb-5 bg-green-400 text-center p-5">
          <p className="text-center font-bold text-3xl">
            User Management System
          </p>
        </div>
        <Outlet></Outlet>
    </>
  )
}

export default App
