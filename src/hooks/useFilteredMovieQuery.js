import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchFilteredMovies = ({ queryKey }) => {
  const [_key, { keyword, page, genre, sortBy }] = queryKey;

  return api.get("/search/movie", {
    params: {
      query: keyword,
      page,
      with_genres: genre?.join(","),
      sort_by: sortBy,
    },
  });
};

export const useFilteredMovieQuery = ({ keyword, page, genre, sortBy }) => {
  return useQuery({
    queryKey: ["filtered-movies", { keyword, page, genre, sortBy }],
    queryFn: fetchFilteredMovies,
    select: (res) => res.data,
    keepPreviousData: true,
  });
};
