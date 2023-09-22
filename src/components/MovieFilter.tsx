import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import CustomSelect from "./CustomComponent/CustomSelect";
import CustomInput from "./CustomComponent/CustomInput";
import { useEffect, useState } from "react";
import { heading, heading3 } from "../style/style";
import { fetchFilteredMovie } from "../store/api/movieApi";
import MovieList from "./MovieList";
import { movieFilterAction } from "../store/movieFilterSlice";
import { fetchLanguage } from "../store/api/language";

const MovieFilter = () => {
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const [genre, setGenre] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(9);
  const [language, setLanguage] = useState("");
  const genres = useSelector((state: RootState) => state.movies.genres);
  const languges = useSelector((state: RootState) => state.language.languages);
  console.log({ languges });
  const { movies, currentPage, loading } = useSelector(
    (state: RootState) => state.movieFilter
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilteredMovie(currentPage, year, rating, genre, language));
  }, [year, currentPage, rating, genre, language, dispatch]);

  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChangeRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(
      genres.find((genre) => genre.name === e.target.value)?.id as number
    );

    dispatch(movieFilterAction.resetPage());
  };

  const handleOnChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
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
            onChange={handleOnChangeGenre}
          />
        </div>

        <div>
          <span className={heading3}>Year : </span>
          <CustomInput
            type="number"
            placeholder="Year"
            value={String(year)}
            onChange={handleOnChangeYear}
            className="w-[100px] rounded-lg text-[20px] text-center "
          />
        </div>

        <div>
          <span className={heading3}>Rating : </span>
          <CustomSelect
            options={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]}
            onChange={handleOnChangeRating}
          />
        </div>

        <div>
          <span className={heading3}>Langauge : </span>
          <CustomSelect
            options={languges.map((language) => ({
              value: language.iso_639_1,
              title: language.english_name,
            }))}
            onChange={handleOnChangeLanguage}
          />
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
