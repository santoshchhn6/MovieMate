import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import MovieList from "./Slider";
import { upcomingMovieAction } from "../redux/upcomingMovieSlice";

const UpcomingMovie = () => {
  const upcomingMovie = useSelector((state: RootState) => state.upcoming);

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchUpcomingMovie());
  }, [dispatch, upcomingMovie.currentPage]);

  const handleCurrentPage = (page: number) => {
    dispatch(upcomingMovieAction.setCurrentPage(page));
  };

  return (
    <MovieList
      title="Upcoming"
      movies={upcomingMovie.movies}
      currentPage={upcomingMovie.currentPage}
      totalPages={upcomingMovie.totalPages}
      setCurrentPage={handleCurrentPage}
    />
  );
};

export default UpcomingMovie;
