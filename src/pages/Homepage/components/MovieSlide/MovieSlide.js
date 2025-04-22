import React from "react";
import { Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlide.style.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

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
