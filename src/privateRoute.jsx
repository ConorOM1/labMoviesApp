import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoute = ({ children }) => {
  let { isAuthenticated } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }
  
  return children;
};

export default PrivateRoute;
