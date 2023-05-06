import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { performSearch } from "../redux/app_slice";
import { appDispatch } from "../redux";

const SearchInput = () => {
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
