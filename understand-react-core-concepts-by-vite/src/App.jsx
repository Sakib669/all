import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './Components/Device/Device'
import Watch from './Components/Watch/Watch'
import Knob from './Components/Knob/Knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps="414"></Knob>
      <Device name="uphone" price="13000"></Device>
      <Device name="noku pukua" price="11000"></Device>
      <Watch></Watch>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
