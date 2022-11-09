import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AnotherLoader from "../components/Loader/AnotherLoader";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <AnotherLoader></AnotherLoader>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
