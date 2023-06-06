import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Intro from './Components/Intro/Intro'
import JobCategory from './Components/JobCategory/JobCategory'
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App md:mx-28 text-[#757575]">
        <Intro></Intro>
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
        <Outlet></Outlet>
    </div>
  )
}

export default App
