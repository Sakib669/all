import { useState } from 'react'
import './App.css'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {

  const navigation = useNavigation();

  return (
    <div className="App">
      <Header></Header>
      <div>{navigation.state === 'loading' && 'Loading....'}</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
