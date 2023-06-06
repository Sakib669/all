import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/Home/News/News";
import NewLayout from "../Pages/Home/NewsLayout/NewLayout";
import LoginLayout from "../Pages/LoginLayout/LoginLayout";
import Login from "../Pages/LoginLayout/Login/Login";
import Register from "../Pages/LoginLayout/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Home/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Layout></Layout>,
        children: [
            
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-sakib669.vercel.app/categories/${params.id}`)
            },
            
        ]
    },
    {
        path: 'news',
        element: <NewLayout></NewLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute>
                    <News></News>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-sakib669.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;