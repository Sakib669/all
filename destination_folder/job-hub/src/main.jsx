import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import JobDetails from './Components/JobDetails/JobDetails'
import Header from './Components/Header/Header'
import Analysis from './Components/Analysis/Analysis'
import Blog from './Components/Blog/Blog'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import ErrorPage from './Components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/job-details/:id',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/analysis',
        element: <Analysis></Analysis>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
  {
    path: '*',
    element : <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
