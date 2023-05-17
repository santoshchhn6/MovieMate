import { appDispatch } from ".";
import { Genre, Movie } from "../type";
import { upcomingMovieAction } from "./upcomingMovieSlice";
import { nowPlayingMovieAction } from "./nowPlayingMovieSlice";
import { popularMovieAction } from "./popularMovieSlice";
import { searchResultMovieAction } from "./searchresultMovieSlice";
import { topRatedMovieAction } from "./topRatedMovieSlice";
import { movieAction } from "./movieSlice";

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

export const fetchSearchMovie = (searchInput: string, currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    const fetchSearchMovieHandler = async (
      search: string,
      currentPage: number
    ): Promise<Movie[]> => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${currentPage}&include_adult=false&query=${search}`
      );
      const data = await res.json();
      return data.results;
    };
    try {
      const data = await fetchSearchMovieHandler(searchInput, currentPage);
      dispatch(searchResultMovieAction.addMovies(data));
      dispatch(searchResultMovieAction.setTotalPage(data.length));
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
      return trailers.find((e: { type: string }) => e.type === "Trailer").id;
    };
    try {
      const data = await fetchMovieTrailerHandler();
      dispatch(movieAction.addTrailer(data));
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
