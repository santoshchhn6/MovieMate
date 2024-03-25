import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GenreProps } from "../type";

type GenreState = {
  genres: GenreProps[];
};

const initialState: GenreState = {
  genres: [],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<GenreProps[]>) {
      state.genres = action.payload;
    },
  },
});

export const genreAction = genreSlice.actions;
export default genreSlice;
