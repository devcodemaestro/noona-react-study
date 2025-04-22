import React from "react";
import { usePopularMoviesQuery } from "hooks/usePopularMovies";
import MovieSlide from "../MovieSlide/MovieSlide";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  return (
    <MovieSlide
      title="Popular Movies"
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default PopularMovieSlide;
