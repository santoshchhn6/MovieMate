import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";
import popularMovieSlice from "./popularMovieSlice";
import upcomingMovieSlice from "./upcomingMovieSlice";
import nowPlayingMovieSlice from "./nowPlayingMovieSlice";
import topRatedMovieSlice from "./topratedMovieSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    popular: popularMovieSlice.reducer,
    upcoming:upcomingMovieSlice.reducer,
    nowPlaying:nowPlayingMovieSlice.reducer,
    topRated:topRatedMovieSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
