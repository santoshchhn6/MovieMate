import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import { popularMovieAction } from "../redux/popularMovieSlice";
import MovieList from "./MovieList";

const PopularMovie = () => {
  const popularMovie = useSelector((state: RootState) => state.popular);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchPopularMovie(popularMovie.currentPage));
  }, [dispatch, popularMovie.currentPage]);

  const handleNextPage = () => {
    dispatch(popularMovieAction.nextPage());
  };

  return <MovieList movies={popularMovie.movies} nextPage={handleNextPage} loading={popularMovie.loading}/>;
};

export default PopularMovie;
