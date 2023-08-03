import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GenreProps} from "../utils/type";

type MoviesState = {
  genres: GenreProps[];
};

const initialState: MoviesState = {
  genres: [],

};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<GenreProps[]>) {
      state.genres = action.payload;
    },
    
  },
});

export const moviesAction = moviesSlice.actions;
export default moviesSlice;
