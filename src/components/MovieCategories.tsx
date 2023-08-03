import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../store";
import { useEffect, useState } from "react";
import { MovieCategoryProps } from "../utils/type";
import { fetchMovie } from "../store/api/movieApi";
import { categoryAction } from "../store/categorySlice";

const MovieCategories = () => {
  const [category, setCategory] = useState<MovieCategoryProps>("popular");
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovie(category, currentPage));
  }, [category, currentPage, dispatch]);

  const nextPage = () => {
    dispatch(categoryAction.nextPage());
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as MovieCategoryProps);
  };
  return (
    <>
      <select
        onChange={handleOnChange}
        className="m-5 p-2 w-[220px]  bg-blue-600 text-xl outline-none rounded-lg font-['Poppin-sb']"
      >
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
        <option value="top_rated">Top Rated</option>
      </select>

      <MovieList movies={movies} nextPage={nextPage} loading={loading} />
    </>
  );
};

export default MovieCategories;
