import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { performSearch } from "../store/app_slice";
import { appDispatch } from "../store";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomComponent/CustomInput";

const SearchMovie = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<appDispatch>();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input) {
      console.log(input);
      dispatch(performSearch(input));
      navigate("/search");
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" bg-black/70 flex items-center py-2 px-3 rounded-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Movies..."
        className={` w-[100%] bg-transparent font-['Poppin'] text-xl  outline-none `}
      />

      <button type="submit" className=" text-gray-600 hover:text-blue-600">
        <BsSearch size={25} />
      </button>
    </form>
  );
};

export default SearchMovie;
