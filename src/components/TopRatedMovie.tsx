import MovieList from "./MovieList";
import useMovieAPI from "../customHooks/useMovieAPI";

const TopRatedMovie = () => {
  const { movies, isLoading, nextPage } = useMovieAPI("/movie/top_rated");
  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;
};

export default TopRatedMovie;
