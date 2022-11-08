import { createBrowserRouter } from "react-router-dom";
import Home from "../../src/components/Pages/Home/Home";
import Login from "../components/Login/Login";
import Addservice from "../components/Pages/Addservice/Addservice";
import Allservices from "../components/Pages/Home/Services/Allservices/Allservices";
import ServiceDetail from "../components/Pages/ServiceDetail/ServiceDetail";
import Signup from "../components/Signup/Signup";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Addservice></Addservice>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicedetail/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
