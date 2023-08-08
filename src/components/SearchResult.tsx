import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, appDispatch } from "../store";
import { fetchSearchMovie } from "../store/api/movieApi";
import { searchResultMovieAction } from "../store/searchMovieSlice";
import MovieList from "./MovieList";

const SearchResult = () => {
  const searchInput = useSelector((state: RootState) => state.app.search);
  const searchResult = useSelector((state: RootState) => state.searchResult);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchSearchMovie(searchInput, searchResult.currentPage));
  }, [dispatch, searchResult.currentPage, searchInput]);

  const handleNextPage = () => {
    dispatch(searchResultMovieAction.nextPage());
  };

  return (
    <MovieList
      movies={searchResult.movies}
      nextPage={handleNextPage}
      loading={searchResult.loading}
    />
  );
};

export default SearchResult;
