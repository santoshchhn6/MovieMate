import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../redux/movie_action";
import { appDispatch, RootState } from "../redux";
import { popularMovieAction } from "../redux/popularMovieSlice";
import MovieList from "./MovieList";
import { Movie } from "../type";
import useMovieAPI from "../customHooks/useMovieAPI";

const PopularMovie = () => {
  const { movies, error, isLoading, nextPage } = useMovieAPI("/movie/popular");

  // const popularMovie = useSelector((state: RootState) => state.popular);
  // const dispatch = useDispatch<appDispatch>();

  // useEffect(() => {
  //   dispatch(fetchPopularMovie(popularMovie.currentPage));
  // }, [dispatch, popularMovie.currentPage]);

  // const handleNextPage = () => {
  //   dispatch(popularMovieAction.nextPage());
  // };

  // if (isLoading) return <div>Loading...</div>;

  // if (error) return <span>Error:{error}</span>;

  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;
};

export default PopularMovie;
