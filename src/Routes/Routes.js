import { createBrowserRouter } from "react-router-dom";
import Home from "../../src/components/Pages/Home/Home";
import Login from "../components/Login/Login";
import Addservice from "../components/Pages/Addservice/Addservice";
import Allservices from "../components/Pages/Home/Services/Allservices/Allservices";
import Signup from "../components/Signup/Signup";

import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservices",
        element: <Allservices></Allservices>,
      },
      {
        path: "/addservice",
        element: <Addservice></Addservice>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
