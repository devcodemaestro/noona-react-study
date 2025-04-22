import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreIdList) {
      return [];
    }
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}')`,
      }}
      className="movie-card"
    >
      <div className="overlay p-2">
        <h1
          style={{
            fontSize: "2rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie?.title}
        </h1>
        {showGenre(movie?.genre_ids).map((id, index) => (
          <Badge bg="danger" className="me-1" key={index}>
            {id}
          </Badge>
        ))}
        <div>
          <div>{movie?.vote_average}</div>
          <div>{movie?.popularity}</div>
          <div>{movie?.adult ? "over18" : "under18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
