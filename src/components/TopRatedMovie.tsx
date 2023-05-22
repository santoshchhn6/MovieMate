import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import { topRatedMovieAction } from "../redux/topRatedMovieSlice";
import MovieList from "./MovieList";

const TopRatedMovie = () => {
  const topRatedMovie = useSelector((state: RootState) => state.topRated);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchTopRatedMovie());
  }, [dispatch, topRatedMovie.currentPage]);

  const handleNextPage = () => {
    dispatch(topRatedMovieAction.nextPage());
  };

  return (
    <MovieList
      movies={topRatedMovie.movies}
      nextPage={handleNextPage}
    />
  );
};

export default TopRatedMovie;
