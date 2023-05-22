import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { fetchSearchMovie } from "../redux/movie_action";
import { searchResultMovieAction } from "../redux/searchresultMovieSlice";
import MovieList from "./MovieList";

const SearchResult = () => {
  const searchInput = useSelector((state: RootState) => state.app.search);
  const searchResult = useSelector((state: RootState) => state.searchResult);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchSearchMovie(searchInput));
  }, [dispatch, searchResult.currentPage, searchInput]);

  const handleNextPage = () => {
    dispatch(searchResultMovieAction.nextPage());
  };

  return <MovieList movies={searchResult.movies} nextPage={handleNextPage} />;
};

export default SearchResult;
