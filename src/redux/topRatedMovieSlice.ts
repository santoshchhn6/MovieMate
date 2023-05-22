import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, MovieList } from "../type";

const initialState: MovieList = {
  currentPage: 1,
  totalPages: 1,
  movies: [],
};

const topRatedMovieSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
    nextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const topRatedMovieAction = topRatedMovieSlice.actions;
export default topRatedMovieSlice;
