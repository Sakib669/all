import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceLists from './Components/PriceLists/PriceLists'
import Dashboard from './Components/Dashboard/Dashboard';
import PieCharts from './Components/PieChart/PieChart';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className="text-7xl font-semibold text-purple-600">
      Hello from tailwind!
    </h1>
    <PriceLists></PriceLists>
    <Dashboard></Dashboard>
    {/* <PieCharts></PieCharts> */}
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
