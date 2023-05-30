import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../redux";
import { topRatedMovieAction } from "../redux/topRatedMovieSlice";
import { fetchTopRatedMovie } from "../redux/movie_action";
import { useEffect } from "react";

const TopRatedMovie = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.topRated
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchTopRatedMovie(currentPage));
  }, [currentPage, dispatch]);

  const nextPage = () => {
    dispatch(topRatedMovieAction.nextPage());
  };

  return <MovieList movies={movies} nextPage={nextPage} loading={loading} />;
};

export default TopRatedMovie;
