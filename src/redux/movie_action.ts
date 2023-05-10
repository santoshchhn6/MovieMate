import { appDispatch } from ".";
import { Movie } from "../type";
import { upcomingMovieAction } from "./upcomingMovieSlice";
import { nowPlayingMovieAction } from "./nowPlayingMovieSlice";
import { popularMovieAction } from "./popularMovieSlice";
import { searchResultMovieAction } from "./searchresultMovieSlice";
import { topRatedMovieAction } from "./topratedMovieSlice";

export const fetchPopularMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "popular");
      dispatch(popularMovieAction.addMovies(data));
      dispatch(popularMovieAction.setTotalPage(data.length));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUpcomingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "upcoming");
      dispatch(upcomingMovieAction.addMovies(data));
      dispatch(upcomingMovieAction.setTotalPage(data.length));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchNowPlayingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "now_playing");
      dispatch(nowPlayingMovieAction.addMovies(data));
      dispatch(nowPlayingMovieAction.setTotalPage(data.length));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchTopRatedMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "top_rated");
      dispatch(topRatedMovieAction.addMovies(data));
      dispatch(topRatedMovieAction.setTotalPage(data.length));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSearchMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "popular");
      dispatch(searchResultMovieAction.addMovies(data));
      dispatch(searchResultMovieAction.setTotalPage(data.length));
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
