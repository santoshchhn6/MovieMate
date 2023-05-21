import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import MovieList from "./Slider";
import { nowPlayingMovieAction } from "../redux/nowPlayingMovieSlice";

const NowPlayingMovie = () => {
  const nowPlayingMovie = useSelector((state: RootState) => state.nowPlaying);

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchNowPlayingMovie());
  }, [dispatch, nowPlayingMovie.currentPage]);

  const handleCurrentPage = (page: number) => {
    dispatch(nowPlayingMovieAction.setCurrentPage(page));
  };

  return (
    <MovieList
      title="NowPlaying"
      movies={nowPlayingMovie.movies}
      currentPage={nowPlayingMovie.currentPage}
      totalPages={nowPlayingMovie.totalPages}
      setCurrentPage={handleCurrentPage}
    />
  );
};

export default NowPlayingMovie;
