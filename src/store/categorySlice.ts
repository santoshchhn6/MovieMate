import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieCategoryProps, MovieListProps, MovieProps } from "../type";

type MoviesState = MovieListProps & {
  category: MovieCategoryProps;
};

const initialState: MoviesState = {
  category: "popular",
  currentPage: 1,
  totalPages: 1,
  loading: false,
  movies: [],
};

const categorySlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<MovieCategoryProps>) {
      state.category = action.payload;
    },

    addMovies(state, action: PayloadAction<MovieProps[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
    setMovies(state, action: PayloadAction<MovieProps[]>) {
      state.movies = action.payload;
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

export const categoryAction = categorySlice.actions;
export default categorySlice;
