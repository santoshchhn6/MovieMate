import { useEffect, useState } from "react";
import { Movie } from "../type";

const useMovieAPI = (endpoint: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${endpoint}?&api_key=${
            import.meta.env.VITE_API_KEY
          }&page=${currentPage}`
        );
        const data = await response.json();
        setMovies((movies) => [...movies, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: unknown) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [endpoint, currentPage]);

  const nextPage = () => {
    if (totalPages >= currentPage)
      setCurrentPage((currentPage) => currentPage + 1);
  };

  return { movies, isLoading, error, currentPage, nextPage };
};

export default useMovieAPI;
