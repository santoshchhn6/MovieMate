import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, MovieList } from "../type";

const initialState: MovieList = {
  currentPage: 1,
  totalPages: 1,
  movies: [],
};

const searchResultMovieSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const searchResultMovieAction = searchResultMovieSlice.actions;
export default searchResultMovieSlice;
