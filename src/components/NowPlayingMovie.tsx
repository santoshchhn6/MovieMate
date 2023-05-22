import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import { nowPlayingMovieAction } from "../redux/nowPlayingMovieSlice";
import MovieList from "./MovieList";

const NowPlayingMovie = () => {
  const nowPlayingMovie = useSelector((state: RootState) => state.nowPlaying);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchNowPlayingMovie());
  }, [dispatch, nowPlayingMovie.currentPage]);

  const handleNextPage = () => {
    dispatch(nowPlayingMovieAction.nextPage());
  };

  return (
    <MovieList movies={nowPlayingMovie.movies} nextPage={handleNextPage} />
  );
};

export default NowPlayingMovie;
