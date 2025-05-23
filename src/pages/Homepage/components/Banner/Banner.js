import { usePopularMoviesQuery } from "hooks/useMovieSlides";
import { Alert } from "react-bootstrap";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.results[0].poster_path}')`,
      }}
      className="banner"
    >
      <div className="banner-text-area px-5">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
