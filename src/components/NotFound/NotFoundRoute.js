import React from "react";
import "./NotFoundRoute.css";
import { Link } from "react-router-dom";

const NotFoundRoute = () => {
  return (
    <div className="text-center w-72 bg-black text-white h-full mx-auto page-not-found py-4 rounded-xl">
      <h1 className="text-xl font-bold text-red-500">OOPS!</h1>
      <h5 className="text-warning">404 - PAGE NOT FOUND</h5>
      <p>The page you are looking for is not found</p>
      <button className="btn btn-wide">
        <Link className="text-white" to="/">
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFoundRoute;
