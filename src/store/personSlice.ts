import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieProps, PersonType } from "../utils/type";

type PersonState = {
  person: PersonType | null;
  knownFor: MovieProps[];
};

const initialState: PersonState = {
  person: null,
  knownFor: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson(state, action: PayloadAction<PersonType>) {
      state.person = action.payload;
    },
    setKnowFor(state, action: PayloadAction<MovieProps[]>) {
      state.knownFor = action.payload;
    },
  },
});

export const personAction = personSlice.actions;
export default personSlice;
