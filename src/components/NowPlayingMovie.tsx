import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../redux";
import { nowPlayingMovieAction } from "../redux/nowPlayingMovieSlice";
import { fetchNowPlayingMovie } from "../redux/movie_action";
import { useEffect } from "react";

const NowPlayingMovie = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.nowPlaying
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchNowPlayingMovie(currentPage));
  }, [currentPage, dispatch]);

  const nextPage = () => {
    dispatch(nowPlayingMovieAction.nextPage());
  };

  return <MovieList movies={movies} nextPage={nextPage} loading={loading} />;
};

export default NowPlayingMovie;
