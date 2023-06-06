import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://chef-recipe-hunter-server-sakib669.vercel.app/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/chef-details/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-sakib669.vercel.app/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;