import MovieList from "./MovieList";
import useMovieAPI from "../customHooks/useMovieAPI";

const NowPlayingMovie = () => {
  const { movies, isLoading, nextPage } = useMovieAPI("/movie/now_playing");
  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;
};

export default NowPlayingMovie;
