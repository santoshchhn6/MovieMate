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
      className=" w-[300px] min-w-[300px] px-2 flex "
    >
      <CustomInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Movies..."
        className="w-[100%] pr-10 -mr-8"
      />
      <button type="submit" className="mr-2">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchMovie;
