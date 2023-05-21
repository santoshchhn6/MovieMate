import { appDispatch } from ".";
import { Genre } from "../type";
import { upcomingMovieAction } from "./upcomingMovieSlice";
import { nowPlayingMovieAction } from "./nowPlayingMovieSlice";
import { popularMovieAction } from "./popularMovieSlice";
import { searchResultMovieAction } from "./searchresultMovieSlice";
import { topRatedMovieAction } from "./topRatedMovieSlice";
import { movieAction } from "./movieSlice";
import { trendingMovieAction } from "./TrendingMovieSlice";

export const fetchTrendingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    const fetchTrendingMovieHandler = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${currentPage}`
      );
      return await res.json();
    };
    try {
      const data = await fetchTrendingMovieHandler();
      dispatch(trendingMovieAction.addMovies(data.results));
      dispatch(trendingMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchPopularMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "popular");
      dispatch(popularMovieAction.addMovies(data.results));
      dispatch(popularMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUpcomingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "upcoming");
      dispatch(upcomingMovieAction.addMovies(data.results));
      dispatch(upcomingMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchNowPlayingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "now_playing");
      dispatch(nowPlayingMovieAction.addMovies(data.results));
      dispatch(nowPlayingMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchTopRatedMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchHandler(currentPage, "top_rated");
      dispatch(topRatedMovieAction.addMovies(data.results));
      dispatch(topRatedMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSearchMovie = (searchInput: string, currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    const fetchSearchMovieHandler = async (
      search: string,
      currentPage: number
    ) => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${currentPage}&include_adult=false&query=${search}`
      );
      return await res.json();
    };
    try {
      const data = await fetchSearchMovieHandler(searchInput, currentPage);
      dispatch(searchResultMovieAction.addMovies(data.results));
      dispatch(searchResultMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieGenre = () => {
  return async (dispatch: appDispatch) => {
    const fetchMovieGenreHandler = async (): Promise<Genre[]> => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      return data.genres;
    };
    try {
      const data = await fetchMovieGenreHandler();
      dispatch(movieAction.addGenres(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieTrailer = (id: number) => {
  return async (dispatch: appDispatch) => {
    const fetchMovieTrailerHandler = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      const trailers = data.results;
      return trailers.find((e: { type: string }) => e.type === "Trailer").key;
    };
    try {
      const data = await fetchMovieTrailerHandler();
      dispatch(movieAction.addTrailer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchHandler = async (currentPage: number, type: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${currentPage}`
  );
  return await res.json();
};
