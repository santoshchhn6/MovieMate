import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Genre } from "../type";

interface MovieState {
  genres: Genre[];
  trailer: string;
}

const initialState: MovieState = {
  genres: [],
  trailer: "",
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
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice;
