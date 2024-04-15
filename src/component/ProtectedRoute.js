import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const userContext = useContext(UserContext);
  console.log(userContext);

  if(!userContext.user){
    return <Navigate to="/" replace />
  }

  return children;
}
