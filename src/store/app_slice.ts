import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface appState {
  search: string;
}

const initialState: appState = {
  search: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    performSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { performSearch } = appSlice.actions;
export default appSlice;
