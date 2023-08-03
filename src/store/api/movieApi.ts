import { appDispatch } from "..";
import { searchResultMovieAction } from "../searchMovieSlice";
import { trendingMovieAction } from "../TrendingMovieSlice";
import { setVideoId } from "../videoPlayerSlice";
import { MovieCategoryProps } from "../../utils/type";
import { categoryAction } from "../categorySlice";
import { movieDetailAction } from "../movieDetailSlice";
import { moviesAction } from "../moviesSlice";

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

export const fetchMovie = (category: MovieCategoryProps, currentPage = 1) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData(`/movie/${category}?page=${currentPage}&`);
      dispatch(categoryAction.addMovies(data.results));
      dispatch(categoryAction.setTotalPage(data.total_pages));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCredits = (movieId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (movieId) {
        const data = await fetchData(`/movie/${movieId}/credits?`);
        dispatch(movieDetailAction.addCredits(data));
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
        dispatch(movieDetailAction.addReviews(data.results));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieVideos = (id: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (id) {
        const data = await fetchData(`/movie/${id}/videos?`);
        dispatch(movieDetailAction.addVideos(data.results));
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
        dispatch(movieDetailAction.addMovieDetails(data));
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
      dispatch(moviesAction.addGenres(data.genres));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovieTrailer = (id: number) => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData(`/movie/${id}/videos?`);
      const videos = data.results;
      const trailerKey = videos.find(
        (e: { type: string }) => e.type === "Trailer"
      ).key;
      dispatch(setVideoId(trailerKey));
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
