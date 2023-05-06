import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
