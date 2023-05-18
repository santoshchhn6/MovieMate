import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { performSearch } from "../redux/app_slice";
import { appDispatch } from "../redux";

const SearchMovie = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<appDispatch>();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input) {
      console.log(input);
      dispatch(performSearch(input));
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" w-[300px] min-w-[300px] bg-black/50   border-blue-700  rounded-full  px-2 flex "
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Movies..."
        className="w-[100%]  text-[16px] px-2 py-1 outline-none bg-gray-950/0"
      />
      <button type="submit" className="mr-2">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchMovie;
