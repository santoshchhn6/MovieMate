import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState, appDispatch } from "../store";
import { useEffect, useState } from "react";
import { MovieCategoryProps } from "../type";
import { fetchMovie } from "../store/api/movieApi";
import { categoryAction } from "../store/categorySlice";
import CustomSelect from "./CustomComponent/CustomSelect";
import { button1 } from "../style/style";

const MovieCategories = () => {
  const [category, setCategory] = useState<MovieCategoryProps>("popular");
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.category
  );

  const categoryOptions = [
    {
      value: "popular",
      title: "Popular",
    },
    {
      value: "upcoming",
      title: "Upcoming",
    },
    {
      value: "now_playing",
      title: "Now playing",
    },
    {
      value: "top_rated",
      title: "Top Rated",
    },
  ];
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovie(category, currentPage));
  }, [category, currentPage, dispatch]);

  const nextPage = () => {
    dispatch(categoryAction.nextPage());
  };

  // const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCategory(event.target.value as MovieCategoryProps);
  //   dispatch(categoryAction.resetPage());
  // };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.target.name as MovieCategoryProps);
    dispatch(categoryAction.resetPage());
  };

  return (
    <div className={`mt-5`}>
      {/* <CustomSelect
        options={categoryOptions}
        onChange={handleOnChange}
        className="w-[240px]"
      /> */}
      <div className=" flex justify-between">
        {categoryOptions.map((e, i) => (
          <button
            key={i}
            name={e.value}
            onClick={handleOnClick}
            className="text-white text-[24px] font-['Poppin-sb'] hover:text-blue-600"
          >
            {e.title.toUpperCase()}
          </button>
        ))}
      </div>

      <MovieList movies={movies} nextPage={nextPage} loading={loading} />
    </div>
  );
};

export default MovieCategories;
