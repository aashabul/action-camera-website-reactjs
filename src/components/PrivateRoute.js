import { Box, CircularProgress } from "@mui/material";
import { setUserId } from "firebase/analytics";
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import IsLoading from "./IsLoading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  if (loading) {
    return <IsLoading />;
  }
  return user.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
