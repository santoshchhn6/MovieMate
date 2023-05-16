import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Genre } from "../type";

interface MovieState {
  genres: Genre[];
}

const initialState: MovieState = {
  genres: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<Genre[]>) {
      state.genres = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice;
