import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Movie {
  id: number;
  title: string;
  date: string;
  poster_path: string;
  release_date: string;
}

const SearchInput = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState<string>("");
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
    <form
      onSubmit={handleSearch}
      className="w-[300px] min-w-[300px]   border-blue-700  rounded-xl  px-2 flex "
    >
      <button type="submit" className="mr-2">
        <BsSearch />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Movies..."
        className="w-[100%]  text-[20px] p-2 outline-none bg-gray-950/0"
      />
    </form>
  );
};

export default SearchInput;
