import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Poster from "./Poster";

interface Movie {
  id: number;
  title: string;
  date: string;
  poster_path: string;
  release_date: string;
}

const SearchMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [input, setInput] = useState<string>("");
  const poster_width = 300;
  const poster_height = 450;
  const poster_gap = 20;

  // const getMovies = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${
  //       import.meta.env.VITE_API_KEY
  //     }&language=en-US&page=1&include_adult=false&query=${input}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // };

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(input);
  //   console.log("enter");
  //   if (input) {
  //     getMovies();
  //   }
  // };

  return (
    <div className="w-[100%]  flex flex-col items-center">
      {/* <form
        onSubmit={handleSearch}
        className="mt-[20px] w-[60%] min-w-[300px]  border-2 border-blue-700  rounded-xl  px-2 flex "
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Movies..."
          className="w-[100%]  text-[20px] p-2 outline-none bg-gray-950/0"
        />
        <button type="submit" className="mr-2">
          <BsSearch />
        </button>
      </form> */}
      <div
        className={`  flex flex-wrap justify-center ease-in-out duration-500 `}
        style={{ gap: `${poster_gap}px`, padding: `${poster_gap}px` }}
      >
        {movies.map((movie, i) => (
          <Poster
            key={i}
            id={movie.id}
            title={movie.title}
            width={poster_width}
            height={poster_height}
            poster_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            release_date={movie.release_date}
            vote_average={null}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
