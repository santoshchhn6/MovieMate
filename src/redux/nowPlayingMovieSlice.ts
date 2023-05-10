import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, MovieList } from "../type";

const initialState: MovieList = {
  currentPage: 1,
  totalPages: 1,
  movies: [],
};

const nowPlayingMovieSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const nowPlayingMovieAction = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice;
