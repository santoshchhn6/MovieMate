import { useState, useEffect } from "react";

interface Movie {
  id: number;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  title: string;
  overview: string;
}

interface Genre {
  id: number;
  name: string;
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [releaseYear, setReleaseYear] = useState<number | null>(null);
  const [minimumRating, setMinimumRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGenres = async () => {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
    fetchGenres();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    if (selectedGenre && !movie.genre_ids.includes(selectedGenre)) {
      return false;
    }

    if (
      releaseYear &&
      new Date(movie.release_date).getFullYear() !== releaseYear
    ) {
      return false;
    }

    if (minimumRating && movie.vote_average < minimumRating) {
      return false;
    }

    return true;
  });

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(parseInt(e.target.value));
  };

  const handleReleaseYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReleaseYear(parseInt(event.target.value));
  };

  const handleMinimumRatingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinimumRating(parseFloat(event.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={selectedGenre || ""}
          onChange={handleGenreChange}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="release-year">Release Year:</label>
        <input
          type="number"
          id="release-year"
          min="1900"
          max={new Date().getFullYear()}
          value={releaseYear || ""}
          onChange={handleReleaseYearChange}
        />
      </div>
      <div>
        <label htmlFor="minimum-rating">Minimum Rating:</label>
        <input
          type="number"
          id="minimum-rating"
          step="0.1"
          min="0"
          max="10"
          value={minimumRating || ""}
          onChange={handleMinimumRatingChange}
        />
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <ul>
              {movie.genre_ids.map((genreId) => (
                <li key={genreId}>
                  {genres.find((genre) => genre.id === genreId)?.name}
                </li>
              ))}
            </ul>
            <p>Rating: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
