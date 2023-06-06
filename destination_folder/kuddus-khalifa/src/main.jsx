import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import CardsContainer from './Components/CardsContainer/CardsContainer'
import RoomContainer from './Components/RoomContainer/RoomContainer'
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <CardsContainer></CardsContainer>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/bookings',
        element: 
                <PrivateRoutes>
                    <RoomContainer></RoomContainer>
                </PrivateRoutes>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
