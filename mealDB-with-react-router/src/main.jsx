import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Foods from './Components/Food/Foods';
import Rice from './Components/Rice/Rice';
import RiceDetailsInside from './Components/RiceDetailsInside/RiceDetailsInside';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {path: 'foods',
      element: <Foods></Foods>,
      loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: '/rice',
        element: <Rice></Rice>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=rice')
      },
      {
        path: '/rice/:riceID',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.riceID}`),
        element: <RiceDetailsInside></RiceDetailsInside>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
