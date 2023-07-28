import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../store";
import { topRatedMovieAction } from "../store/topRatedMovieSlice";
import { fetchTopRatedMovie } from "../store/api/movieApi";
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
