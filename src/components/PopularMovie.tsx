import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../store";
import { popularMovieAction } from "../store/popularMovieSlice";
import { fetchPopularMovie } from "../store/api/movieApi";
import { useEffect } from "react";

const PopularMovie = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.popular
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchPopularMovie(currentPage));
  }, [currentPage, dispatch]);

  const nextPage = () => {
    dispatch(popularMovieAction.nextPage());
  };

  return <MovieList movies={movies} nextPage={nextPage} loading={loading} />;
};

export default PopularMovie;
