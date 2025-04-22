import React from "react";
import MovieSlide from "../MovieSlide/MovieSlide";
import { useUpcomingMoviesQuery } from "hooks/usePopularMovies";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  return (
    <MovieSlide
      title="Upcoming Movies"
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default UpcomingMovieSlide;
