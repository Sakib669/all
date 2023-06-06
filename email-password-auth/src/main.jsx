import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Layout/Main'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import RegisterRBS from './Components/RegisterRBS/RegisterRBS'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBS from './Components/RegisterBS/RegisterBS'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/register-rbs',
        element: <RegisterRBS/>
      },
      {
        path: '/register-bs',
        element: <RegisterBS/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
