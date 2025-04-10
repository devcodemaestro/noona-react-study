import ProductDetail from "pages/ProductDetail";
import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
