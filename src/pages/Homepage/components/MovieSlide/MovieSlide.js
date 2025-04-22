import React from "react";
import { Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlide.style.css";
import { responsive } from "constants/responsive";
import MovieCard from "common/MovieCard/MovieCard";

const MovieSlide = ({ title, data, isLoading, isError, error }) => {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div className="px-5">
      <h3 className="fw-bold pt-5">{title}</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding"
        partialVisible={false}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
