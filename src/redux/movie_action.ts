import { appDispatch } from ".";
import { Movie } from "../type";
import { PopularMovieAction } from "./popularMovieSlice";

export const fetchPopularMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "popular");
      dispatch(PopularMovieAction.addMovies(data));
      dispatch(PopularMovieAction.setTotalPage(data.length));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchHandler = async (
  currentPage: number,
  type: string
): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${currentPage}`
  );
  const data = await res.json();
  return data.results;
};
