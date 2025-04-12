import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "pages/ProductAll";
import { useState } from "react";
import { Route, Routes } from "react-router";
import PrivateRoute from "route/PrivateRoute";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";

const ShoppingMall = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      {" "}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
};

export default ShoppingMall;
