/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  if (!user) {
    return <Navigate to="/login" state={{from: location}} />;
  }

  return children;
};

export default PrivateRoute;
