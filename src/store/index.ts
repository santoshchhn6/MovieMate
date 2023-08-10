import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";
import searchResultMovieSlice from "./searchMovieSlice";
import moviesSlice from "./moviesSlice";
import trendingMovieSlice from "./TrendingMovieSlice";
import videoPlayerSlice from "./videoPlayerSlice";
import movieDetailSlice from "./movieDetailSlice";
import categorySlice from "./categorySlice";
import personSlice from "./personSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    personDetail: personSlice.reducer,
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
