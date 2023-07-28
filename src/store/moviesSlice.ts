import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GenreProps, MovieListProps, MovieProps } from "../utils/type";

type MoviesState = MovieListProps & {
  genres: GenreProps[];
  movieSelected: "popular" | "now_playing" | "top_rated" | "upcoming";
};

const initialState: MoviesState = {
  genres: [],
  movieSelected: "popular",
  currentPage: 1,
  totalPages: 1,
  loading: false,
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<GenreProps[]>) {
      state.genres = action.payload;
    },
    setSelectedMovie(state, action) {
      state.movieSelected = action.payload;
    },

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

export const movieAction = moviesSlice.actions;
export default moviesSlice;
