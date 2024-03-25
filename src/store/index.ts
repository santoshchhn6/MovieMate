import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app_slice";
import searchResultMovieSlice from "./searchMovieSlice";
import trendingMovieSlice from "./TrendingMovieSlice";
import videoPlayerSlice from "./videoPlayerSlice";
import movieDetailSlice from "./movieDetailSlice";
import categorySlice from "./categorySlice";
import personSlice from "./personSlice";
import movieFilterSlice from "./movieFilterSlice";
import languageSlice from "./languageSlice";
import genreSlice from "./genreSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    personDetail: personSlice.reducer,
    videoPlayer: videoPlayerSlice.reducer,
    language: languageSlice.reducer,
    genre: genreSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    movieFilter: movieFilterSlice.reducer,
    trending: trendingMovieSlice.reducer,
    category: categorySlice.reducer,
    searchResult: searchResultMovieSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
