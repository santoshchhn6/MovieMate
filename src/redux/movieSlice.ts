import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Genre, Movie } from "../type";

interface MovieState {
  genres: Genre[];
  trailer: string;
  showTrailer: boolean;
  movieSelected: "popular" | "now_playing" | "top_rated" | "upcoming";

 
}

const initialState: MovieState = {
  genres: [],
  trailer: "",
  showTrailer: false,
  movieSelected: "popular",

};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<Genre[]>) {
      state.genres = action.payload;
    },
    addTrailer(state, action: PayloadAction<string>) {
      state.trailer = action.payload;
    },
    setShowTrailer(state, action: PayloadAction<boolean>) {
      state.showTrailer = action.payload;
    },
    setSelectedMovie(state, action) {
      state.movieSelected = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice;
