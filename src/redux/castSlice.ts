import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Actors } from "../type";

type CastType = {
  actors: Actors[];
};

const initialState: CastType = {
  actors: [],
};

const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {
    addCast(state, action: PayloadAction<Actors[]>) {
      state.actors = action.payload;
    },
  },
});

export const castAction = castSlice.actions;
export default castSlice;
