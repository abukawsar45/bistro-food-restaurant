import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../components/Secret/Secret";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/secret',
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/mycart',
        element: <MyCart/>
      }
    ]
  }
]);

export default Router;