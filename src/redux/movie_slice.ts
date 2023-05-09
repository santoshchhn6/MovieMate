import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../type";

interface MovieListType {
  currentPage: number;
  totalPages: number;
  movies: Movie[];
}

const MovieList = {
  currentPage: 1,
  totalPages: 1,
  movies: [],
};

interface MovieState {
  popular: MovieListType;
  upcoming: MovieListType;
  now_playing: MovieListType;
  top_rated: MovieListType;
  search_result: MovieListType;
}

const initialState: MovieState = {
  popular: MovieList,
  upcoming: MovieList,
  now_playing: MovieList,
  top_rated: MovieList,
  search_result: MovieList,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addPopularMovie(state, action: PayloadAction<Movie[]>) {
      state.popular.movies = [...state.popular.movies, ...action.payload];
    },
    addUpcomingMovie(state, action: PayloadAction<Movie[]>) {
      state.upcoming.movies = [...state.upcoming.movies, ...action.payload];
    },
    addNowPlayingMovie(state, action: PayloadAction<Movie[]>) {
      state.now_playing.movies = [
        ...state.now_playing.movies,
        ...action.payload,
      ];
    },
    addTopRatedMovie(state, action: PayloadAction<Movie[]>) {
      state.top_rated.movies = [...state.top_rated.movies, ...action.payload];
    },
    addSearchResult(state, action: PayloadAction<Movie[]>) {
      state.search_result.movies = action.payload;
    },
  },
});

export const {
  addPopularMovie,
  addNowPlayingMovie,
  addSearchResult,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;
export default movieSlice;
