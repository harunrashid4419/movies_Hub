import React, { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }: any) => {
  const { user, loader }: any = useContext(AuthContext);
  const [isAdmin, isLoader] = useAdmin(user?.email);

  if (loader || isLoader) {
    return <div>Loading...</div>;
  }
  if (!user || !isAdmin) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default AdminRoutes;
