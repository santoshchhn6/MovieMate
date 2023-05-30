import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../redux";
import { upcomingMovieAction } from "../redux/upcomingMovieSlice";
import { fetchUpcomingMovie } from "../redux/movie_action";
import { useEffect } from "react";

const UpcomingMovie = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.upcoming
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchUpcomingMovie(currentPage));
  }, [currentPage, dispatch]);

  const nextPage = () => {
    dispatch(upcomingMovieAction.nextPage());
  };

  return <MovieList movies={movies} nextPage={nextPage} loading={loading} />;
};

export default UpcomingMovie;
