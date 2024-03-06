import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const checkAuth = () => {
    if(localStorage.getItem("userId")) {
      return true;
    } else {
      return false;
    }
  }

  const isAuthorized = checkAuth();

  return (
    isAuthorized ? <Component {...props} /> : <Navigate to="/" />
  );
};

export default ProtectedRouteElement;