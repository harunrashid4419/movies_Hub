import React, { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }: any) => {
  const { user, loader }: any = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    <div>Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
