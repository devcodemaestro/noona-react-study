import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "layout/AppLayout";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "pages/Homepage/HomePage";
import MoviesPage from "pages/Movies/MoviesPage";
import MovieDetailPage from "pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";

// 홈페이지
// 영화 전체 보여주는 페이지 (서치)
// 영화 디테일 페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
