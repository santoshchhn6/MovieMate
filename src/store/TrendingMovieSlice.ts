import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieProps, MovieListProps } from "../utils/type";

const initialState: MovieListProps = {
  currentPage: 1,
  totalPages: 1,
  loading: false,
  movies: [],
};

const trendingMovieSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<MovieProps[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
    nextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const trendingMovieAction = trendingMovieSlice.actions;
export default trendingMovieSlice;
