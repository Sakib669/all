import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Countries from './assets/Components/Countries/Countries'
import CountryDetails from './assets/Components/CountryDetails/CountryDetails'

const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  children: [
    {
      path: '/countries',
      element: <Countries></Countries>,
      loader: () => fetch('https://restcountries.com/v3.1/all')
    }
    ,
    {
      path: '/countries/:countryName',
      element : <CountryDetails></CountryDetails>,
      loader: ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
