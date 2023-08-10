import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PersonType } from "../utils/type";

type PersonState = {
  person: PersonType | null;
};

const initialState: PersonState = {
  person: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson(state, action: PayloadAction<PersonType>) {
      state.person = action.payload;
    },
  },
});

export const personAction = personSlice.actions;
export default personSlice;
