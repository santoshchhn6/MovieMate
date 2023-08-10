import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { searchResultMovieAction } from "../store/searchMovieSlice";
import { RootState, appDispatch } from "../store";
import { useEffect } from "react";
import { fetchSearchMovie } from "../store/api/movieApi";
import { heading, margin } from "../style/style";

const SearchPage = () => {
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
    <div className={`min-h-[100vh] border border-gray-950 ${margin}`}>
      <h1 className={`${heading} mb-0`}>Search Result</h1>
      <MovieList
        movies={searchResult.movies}
        nextPage={handleNextPage}
        loading={searchResult.loading}
      />
    </div>
  );
};

export default SearchPage;
