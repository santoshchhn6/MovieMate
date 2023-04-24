import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Movie {
  id: string;
  title: string;
  date: string;
  poster_path: string;
  release_date: string;
}

const SearchMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState<string>("");
  const poster_width = 200;
  const poster_height = 300;
  const poster_gap = 10;

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1&include_adult=false&query=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    console.log("enter");
    if (input) {
      getMovies();
    }
  };

  return (
    <div className="w-[100%]  border-2 border-blue-600">
      <form
        onSubmit={handleSearch}
        className=" border border-gray-600 rounded-lg w-[300px] px-2 flex"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Movies..."
          className="w-[100%]  text-2xl p-2 outline-none "
        />
        <button type="submit" className="mr-2">
          <BsSearch />
        </button>
      </form>
      <ul
        className={` border-2 border-red-600 flex flex-wrap justify-center ease-in-out duration-500 `}
        style={{ gap: `${poster_gap}px` }}
      >
        {movies.slice(0, -2).map((movie, i) => (
          <li key={i} className="border">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className={`object-cover`}
              style={{
                width: `${poster_width}px`,
                height: `${poster_height}px`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovie;
