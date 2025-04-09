import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "pages/ProductAll";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

//1. 전체 상품 페이지, 로그인, 상품 상세 페이지를 만든다.
//1-1. 네비게이션 바
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3-1. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3-2. 상품 디테일을 눌렀으나로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//5-1. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5-2. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할 수 있다.

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
