import { useSelector } from "react-redux";
import { RootState } from "../store";
import CustomSelect from "./CustomComponent/CustomSelect";
import CustomInput from "./CustomComponent/CustomInput";
import { useState } from "react";
import { heading, heading3 } from "../style/style";

const Filter = () => {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState<number | "All">("All");
  const genres = useSelector((state: RootState) => state.movies.genres);

  console.log({ genre, year, rating });

  return (
    <div className={` mt-5 flex justify-between`}>
      <div>
        <span className={heading3}>Genre : </span>
        <CustomSelect
          options={genres.map((genre) => ({
            value: genre.name,
            title: genre.name.toUpperCase(),
          }))}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div>
        <span className={heading3}>Year : </span>
        <CustomInput
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-[100px] rounded-lg text-[20px] text-center "
        />
      </div>

      <div>
        <span className={heading3}>Rating : </span>
        <CustomSelect
          options={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </div>

      <button
        className="bg-blue-600 px-5 text-xl font-['Poppin-sb'] rounded-lg"
        onClick={() => console.log()}
      >
        FILTER
      </button>
    </div>
  );
};

export default Filter;
