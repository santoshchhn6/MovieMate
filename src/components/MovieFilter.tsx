import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import CustomSelect from "./CustomComponent/CustomSelect";
import CustomInput from "./CustomComponent/CustomInput";
import { useEffect, useState } from "react";
import { heading, heading3 } from "../style/style";
import { fetchFilteredMovie } from "../store/api/movieApi";
import MovieList from "./MovieList";
import { movieFilterAction } from "../store/movieFilterSlice";

const MovieFilter = () => {
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const [genre, setGenre] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(9);
  const [country, setCountry] = useState("");
  const genres = useSelector((state: RootState) => state.movies.genres);
  console.log({ genres });
  const { movies, currentPage, loading } = useSelector(
    (state: RootState) => state.movieFilter
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchFilteredMovie(currentPage, year, rating, genre));
  }, [year, currentPage, rating, genre, dispatch]);

  const handleOnChageYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChageRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChageGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(
      genres.find((genre) => genre.name === e.target.value)?.id as number
    );

    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChageCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
    dispatch(movieFilterAction.resetPage());
  };

  return (
    <>
      <div className={` mt-5 flex justify-between`}>
        <div>
          <span className={heading3}>Genre : </span>
          <CustomSelect
            options={genres.map((genre) => ({
              value: genre.name,
              title: genre.name.toUpperCase(),
            }))}
            onChange={handleOnChageGenre}
          />
        </div>

        <div>
          <span className={heading3}>Year : </span>
          <CustomInput
            type="number"
            placeholder="Year"
            value={String(year)}
            onChange={handleOnChageYear}
            className="w-[100px] rounded-lg text-[20px] text-center "
          />
        </div>

        <div>
          <span className={heading3}>Rating : </span>
          <CustomSelect
            options={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]}
            onChange={handleOnChageRating}
          />
        </div>

        <div>
          <span className={heading3}>Country : </span>
          <CustomSelect options={[]} onChange={handleOnChageRating} />
        </div>

        <button
          className="bg-blue-600 px-5 text-xl font-['Poppin-sb'] rounded-lg"
          onClick={() => console.log()}
        >
          FILTER
        </button>
      </div>

      <MovieList
        movies={movies}
        loading={loading}
        nextPage={() => {
          dispatch(movieFilterAction.nextPage());
        }}
      />
    </>
  );
};

export default MovieFilter;
