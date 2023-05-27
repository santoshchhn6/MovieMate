import MovieList from "./MovieList";
import useMovieAPI from "../customHooks/useMovieAPI";

const PopularMovie = () => {
  const { movies, isLoading, nextPage } = useMovieAPI("/movie/popular");
  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;
};

export default PopularMovie;
