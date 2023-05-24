import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path:'/',
          element: <Home/>
        }
      ]
      
    },
  ]);

export default Router;