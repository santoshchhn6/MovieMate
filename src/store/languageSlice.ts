import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageType } from "../utils/type";

type LanguageState = {
  languages: LanguageType[];
};

const initialState: LanguageState = {
  languages :[],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    addLanguages(state, action: PayloadAction<LanguageType[]>) {
      state.languages = action.payload;
    },
  },
});

export const LanguageAction = languageSlice.actions;
export default languageSlice;
