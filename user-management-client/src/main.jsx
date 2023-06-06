import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path: '/create-user',
        element: <CreateUser/>
      },
      {
        path: '/user/update-user/:id',
        element: <UpdateUser/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
