import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { fetchSearchMovie } from "../redux/movie_action";
import { searchResultMovieAction } from "../redux/searchresultMovieSlice";
import MovieList from "./MovieList";
import useMovieAPI from "../customHooks/useMovieAPI";

const SearchResult = () => {
  const searchInput = useSelector((state: RootState) => state.app.search);
  // const searchResult = useSelector((state: RootState) => state.searchResult);
  // const dispatch = useDispatch<appDispatch>();

  // useEffect(() => {
  //   dispatch(fetchSearchMovie(searchInput, searchResult.currentPage));
  // }, [dispatch, searchResult.currentPage, searchInput]);

  // const handleNextPage = () => {
  //   dispatch(searchResultMovieAction.nextPage());
  // };

  const { movies, isLoading, nextPage } = useMovieAPI(
    `/search/movie?query=${searchInput}&include_adult=false`
  );

  return <MovieList movies={movies} nextPage={nextPage} loading={isLoading} />;

  // return <MovieList movies={searchResult.movies} nextPage={handleNextPage} loading={searchResult.loading}/>;
};

export default SearchResult;
