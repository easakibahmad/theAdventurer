import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home";
import Allservices from "../components/Pages/Home/Services/Allservices/Allservices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Addservice from "../components/Pages/Addservice/Addservice";
import ServiceDetail from "../components/Pages/ServiceDetail/ServiceDetail";
import MyReview from "../components/Pages/MyReview/MyReview";
import Signup from "../components/Pages/Signup/Signup";
import NotFoundRoute from "../components/Pages/NotFound/NotFoundRoute";
import Blogs from "../components/Pages/Blogs/Blogs";
import Login from "../components/Pages/Login/Login";

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
          fetch(
            `https://the-adventurer-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
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
  { path: "*", element: <NotFoundRoute></NotFoundRoute> },
]);
