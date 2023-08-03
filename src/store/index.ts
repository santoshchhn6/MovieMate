import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";
// import popularMovieSlice from "./popularMovieSlice";
// import upcomingMovieSlice from "./upcomingMovieSlice";
// import nowPlayingMovieSlice from "./tobedeleted/nowPlayingMovieSlice";
// import topRatedMovieSlice from "./topRatedMovieSlice";
import searchResultMovieSlice from "./searchMovieSlice";
import moviesSlice from "./moviesSlice";
import trendingMovieSlice from "./TrendingMovieSlice";
import videoPlayerSlice from "./videoPlayerSlice";
import movieDetailSlice from "./movieDetailSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    videoPlayer: videoPlayerSlice.reducer,
    movies: moviesSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    trending: trendingMovieSlice.reducer,
    category: categorySlice.reducer,
    searchResult: searchResultMovieSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
