import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieListProps, MovieProps } from "../utils/type";

const initialState: MovieListProps = {
  currentPage: 1,
  totalPages: 1,
  loading: false,
  movies: [],
};

const movieFilterSlice = createSlice({
  name: "movieFilter",
  initialState,
  reducers: {
    setMovie(state, action: PayloadAction<MovieProps[]>) {
      state.movies = action.payload;
    },
    addMovie(state, action: PayloadAction<MovieProps[]>) {
      state.movies = [...state.movies,...action.payload];
    },
    nextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    resetPage(state) {
      state.currentPage = 1;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const movieFilterAction = movieFilterSlice.actions;
export default movieFilterSlice;
