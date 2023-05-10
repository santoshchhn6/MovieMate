import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import MovieList from "./MovieList";
import { topRatedMovieAction } from "../redux/topRatedMovieSlice";

const TopRatedMovie = () => {
  const topRatedMovie = useSelector((state: RootState) => state.topRated);

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchTopRatedMovie());
  }, [dispatch, topRatedMovie.currentPage]);

  const handleCurrentPage = (page: number) => {
    dispatch(topRatedMovieAction.setCurrentPage(page));
  };

  return (
    <MovieList
      title="TopRated"
      movies={topRatedMovie.movies}
      currentPage={topRatedMovie.currentPage}
      totalPages={topRatedMovie.totalPages}
      setCurrentPage={handleCurrentPage}
    />
  );
};

export default TopRatedMovie;
