import { appDispatch } from ".";
import { Genre } from "../type";
import { upcomingMovieAction } from "./upcomingMovieSlice";
import { nowPlayingMovieAction } from "./nowPlayingMovieSlice";
import { popularMovieAction } from "./popularMovieSlice";
import { searchResultMovieAction } from "./searchresultMovieSlice";
import { topRatedMovieAction } from "./topRatedMovieSlice";
import { movieAction } from "./movieSlice";
import { trendingMovieAction } from "./TrendingMovieSlice";
import { castAction } from "./castSlice";
import { reviewAction } from "./reviewsSlice";

export const fetchTrendingMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    dispatch(trendingMovieAction.setLoading(true));

    try {
      const data = await fetchData(`/trending/movie/day?page=${currentPage}&`);
      dispatch(trendingMovieAction.addMovies(data.results));
      dispatch(trendingMovieAction.setTotalPage(data.total_pages));
      dispatch(trendingMovieAction.setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchPopularMovie = (currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData(`/movie/popular?page=${currentPage}&`);
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
      const data = await fetchData(`/movie/upcoming?page=${currentPage}&`);
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
      const data = await fetchData(`/movie/now_playing?page=${currentPage}&`);
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
      const data = await fetchData(`/movie/top_rated?page=${currentPage}&`);
      dispatch(topRatedMovieAction.addMovies(data.results));
      dispatch(topRatedMovieAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCast = (movieId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (movieId) {
        const data = await fetchData(`/movie/${movieId}/credits?`);
        dispatch(castAction.addCast(data.cast));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchReviews = (movieId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (movieId) {
        const data = await fetchData(`/movie/${movieId}/reviews?`);
        dispatch(reviewAction.addReviews(data.results));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchMovieDetail = (movieId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (movieId) {
        const data = await fetchData(`/movie/${movieId}?`);
        dispatch(movieAction.setMovieDetail(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSearchMovie = (searchInput: string, currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    dispatch(searchResultMovieAction.setLoading(true));

    try {
      const data = await fetchData(
        `/search/movie?query=${searchInput}&page=${currentPage}&`
      );
      if (currentPage === 1) {
        dispatch(searchResultMovieAction.setMovies(data.results));
        dispatch(searchResultMovieAction.setTotalPage(data.total_pages));
      } else {
        dispatch(searchResultMovieAction.addMovies(data.results));
      }
      dispatch(searchResultMovieAction.setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieGenre = () => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData("/genre/movie/list?");
      dispatch(movieAction.addGenres(data.genres));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieTrailer = (id: number) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData(`/movie/${id}/videos?`);
      const trailers = data.results;
      const trailerKey = trailers.find(
        (e: { type: string }) => e.type === "Trailer"
      ).key;
      dispatch(movieAction.addTrailer(trailerKey));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchData = async (endpoint: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return await res.json();
};
