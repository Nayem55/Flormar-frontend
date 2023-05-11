import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import CartPage from "../Pages/CartPage/CartPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element:<Home></Home> ,
               
            },
            {
                path: '/category/:category',
                element:<CategoryPage></CategoryPage>,
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path: '/cart',
                element:<CartPage></CartPage>
            },
           
        ]
    },

])

export default router;