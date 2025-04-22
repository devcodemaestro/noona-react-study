import React from "react";
import MovieSlide from "../MovieSlide/MovieSlide";
import { useTopRatedMoviesQuery } from "hooks/useMovieSlides";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  return (
    <MovieSlide
      title="Top Rated Movies"
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default TopRatedMovieSlide;
