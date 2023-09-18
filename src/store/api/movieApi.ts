import { appDispatch } from "..";
import { searchResultMovieAction } from "../searchMovieSlice";
import { trendingMovieAction } from "../TrendingMovieSlice";
import { setVideoId } from "../videoPlayerSlice";
import { MovieCategoryProps } from "../../utils/type";
import { categoryAction } from "../categorySlice";
import { movieDetailAction } from "../movieDetailSlice";
import { moviesAction } from "../moviesSlice";
import { fetchData } from "./baseApi";
import { movieFilterAction } from "../movieFilterSlice";

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
      dispatch(categoryAction.setLoading(true));
      const data = await fetchData(`/movie/${category}?page=${currentPage}&`);
      if (currentPage === 1) {
        dispatch(categoryAction.setMovies(data.results));
        dispatch(categoryAction.setTotalPage(data.total_pages));
      } else {
        dispatch(categoryAction.addMovies(data.results));
      }
      dispatch(categoryAction.setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(categoryAction.setLoading(false));
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

export const fetchRecommendations = (movieId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (movieId) {
        const data = await fetchData(`/movie/${movieId}/recommendations?`);
        dispatch(movieDetailAction.addRecommendations(data.results));
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

export const fetchFilteredMovie = (
  currentPage = 1,
  year: number,
  rating: number
) => {
  return async (dispatch: appDispatch) => {
    try {
      dispatch(movieFilterAction.setLoading(true));
      const data = await fetchData(
        `/discover/movie/?primary_release_year=${year}&page=${currentPage}&vote_average.gte=${rating}&vote_average.lte=${
          rating + 1
        }&include_adult=false&with_origin_country=IN&`
      );
      if (currentPage === 1) {
        dispatch(movieFilterAction.setMovie(data.results));
        dispatch(movieFilterAction.setTotalPage(data.total_pages));
      } else {
        dispatch(movieFilterAction.addMovie(data.results));
      }
      dispatch(movieFilterAction.setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(movieFilterAction.setLoading(false));
    }
  };
};
