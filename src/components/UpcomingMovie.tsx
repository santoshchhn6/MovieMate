import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import { upcomingMovieAction } from "../redux/upcomingMovieSlice";
import MovieList from "./MovieList";

const UpcomingMovie = () => {
  const upcomingMovie = useSelector((state: RootState) => state.upcoming);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchUpcomingMovie(upcomingMovie.currentPage));
  }, [dispatch, upcomingMovie.currentPage]);

  const handleNextPage = () => {
    dispatch(upcomingMovieAction.nextPage());
  };

  return (
    <MovieList
      movies={upcomingMovie.movies}
      nextPage={handleNextPage}
      loading={upcomingMovie.loading}
    />
  );
};

export default UpcomingMovie;
