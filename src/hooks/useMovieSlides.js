import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
  return api.get("/movie/popular");
};
const fetchTopRatedMovies = () => {
  return api.get("/movie/top_rated");
};

const fetchUPcomingMovies = () => {
  return api.get("/movie/upcoming");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-top_rated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUPcomingMovies,
    select: (result) => result.data,
  });
};
