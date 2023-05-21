import { useState, useEffect } from "react";
import MovieList from "./Slider";
import { Movie } from "../type";
import { fetchPopularMovie } from "../redux/movie_action";
import { useDispatch } from "react-redux";
import { appDispatch } from "../redux";

interface Props {
  type: string | number;
  title: string;
}

const FetchMovies = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.type}?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      });
  }, [currentPage]);

  return (
    <MovieList
      {...props}
      movies={movies}
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default FetchMovies;
