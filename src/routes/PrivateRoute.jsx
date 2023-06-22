import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../component/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  console.log(location);
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
