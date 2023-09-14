import { useSelector } from "react-redux";
import { RootState } from "../store";
import CustomSelect from "./CustomComponent/CustomSelect";
import CustomInput from "./CustomComponent/CustomInput";
import { useState } from "react";

const Filter = () => {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const genres = useSelector((state: RootState) => state.movies.genres);

  return (
    <div className={` mt-5 flex justify-around`}>
      <CustomSelect
        options={genres.map((genre) => ({
          value: genre.name,
          title: genre.name.toUpperCase(),
        }))}
        onChange={() => console.log}
      />

      <CustomInput
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-[100px] rounded-xl text-[20px] text-center "
      />

      <span>Rating</span>
    </div>
  );
};

export default Filter;
