import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, MovieList } from "../type";

const initialState: MovieList = {
  currentPage: 1,
  totalPages: 1,
  loading: false,
  movies: [],
};

const searchResultMovieSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = [];
      state.movies = action.payload;
    },
    addMovies(state, action: PayloadAction<Movie[]>) {
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
    reset(state){
      state.currentPage= 1;
      state.totalPages= 1;
      state.loading= false;
      state.movies= [];
    }
  },
});

export const searchResultMovieAction = searchResultMovieSlice.actions;
export default searchResultMovieSlice;
