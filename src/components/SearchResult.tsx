import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { Movie } from "../type";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

const SearchResult = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const search = useSelector((state: RootState) => state.app.search);

  useEffect(() => {
    getMovies();
  }, [currentPage, search]);

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=${currentPage}&include_adult=false&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
  };

  return (
    <MovieList
      title="Search Result"
      movies={movies}
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default SearchResult;
