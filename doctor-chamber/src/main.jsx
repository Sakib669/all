import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'
import Home from './Pages/Home.jsx'
import AppointMents from './Pages/AppointMents.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'
import CardDetails from './Pages/CardDetails.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/appointments',
        element: <PrivateRoute><AppointMents/></PrivateRoute>
      },
      {
        path: '/card-detail/:id',
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
