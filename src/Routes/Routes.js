import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import CartPage from "../Pages/CartPage/CartPage";
import Shipping from "../Pages/ShippingPage/Shipping";
import PopCart from "../Components/PopCart/PopCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Modal from "../Components/Modal/Modal";



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
            {
                path: '/shipping',
                element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
            },
            {
                path: '/product/:id',
                element:<ProductDetails/>
            },
            {
                path: '/modal/:modalId',
                element:<Modal/>
            },

           
        ]
    },

])

export default router;