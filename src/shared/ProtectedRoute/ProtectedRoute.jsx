import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { LocalStorageServices } from "../../services";

export default function ProtectedRoute ({ children }) {
  const isLoggedIn = true; // LocalStorageServices.GetData("isLoggedIn");
//   let location = useLocation();
  
  if (isLoggedIn == "false") {
    return <Navigate to="/login" replace />;
  }
  return children;
};
