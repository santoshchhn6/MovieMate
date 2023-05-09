import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";
import movieSlice from "./movie_slice";
import popularMovieSlice from "./popularMovieSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    // movies: movieSlice.reducer,
    popular:popularMovieSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
