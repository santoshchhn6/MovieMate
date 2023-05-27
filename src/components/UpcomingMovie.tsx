import MovieList from "./MovieList";
import useMovieAPI from "../customHooks/useMovieAPI";

const UpcomingMovie = () => {
  const { movies, isLoading, nextPage } = useMovieAPI("/movie/upcoming");
  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;
};

export default UpcomingMovie;
