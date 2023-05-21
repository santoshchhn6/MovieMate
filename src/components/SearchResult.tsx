import { useEffect } from "react";
import MovieList from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { fetchSearchMovie } from "../redux/movie_action";
import { searchResultMovieAction } from "../redux/searchresultMovieSlice";

const SearchResult = () => {
  const searchInput = useSelector((state: RootState) => state.app.search);
  const searchResult = useSelector((state: RootState) => state.searchResult);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchSearchMovie(searchInput));
  }, [dispatch, searchResult.currentPage, searchInput]);

  const handleCurrentPage = (page: number) => {
    dispatch(searchResultMovieAction.setCurrentPage(page));
  };

  return (
    <MovieList
      title="Search Result"
      movies={searchResult.movies}
      currentPage={searchResult.currentPage}
      totalPages={searchResult.totalPages}
      setCurrentPage={handleCurrentPage}
    />
  );
};

export default SearchResult;
