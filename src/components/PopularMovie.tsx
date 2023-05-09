import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import MovieList from "./MovieList";
import { PopularMovieAction } from "../redux/popularMovieSlice";

const PopularMovie = () => {
  const popularMovie = useSelector((state: RootState) => state.popular);

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch, popularMovie.currentPage]);

  const handleCurrentPage = (page: number) => {
    dispatch(PopularMovieAction.setCurrentPage(page));
  };

  return (
    <MovieList
      title="Popular"
      movies={popularMovie.movies}
      currentPage={popularMovie.currentPage}
      totalPages={popularMovie.totalPages}
      setCurrentPage={handleCurrentPage}
    />
  );
};

export default PopularMovie;
