import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Genre, MovieDetail, VideoType } from "../type";

interface MovieState {
  genres: Genre[];
  trailer: string;
  showTrailer: boolean;
  movieSelected: "popular" | "now_playing" | "top_rated" | "upcoming";
  movieDetail: MovieDetail | null;
  videos: VideoType[];
  photos: [];
}

const initialState: MovieState = {
  genres: [],
  trailer: "",
  showTrailer: false,
  movieSelected: "popular",
  movieDetail: null,
  videos: [],
  photos: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addGenres(state, action: PayloadAction<Genre[]>) {
      state.genres = action.payload;
    },
    addTrailer(state, action: PayloadAction<string>) {
      state.trailer = action.payload;
    },
    addVideos(state, action: PayloadAction<VideoType[]>) {
      state.videos = action.payload;
    },
    setShowTrailer(state, action: PayloadAction<boolean>) {
      state.showTrailer = action.payload;
    },
    setSelectedMovie(state, action) {
      state.movieSelected = action.payload;
    },
    setMovieDetail(state, action: PayloadAction<MovieDetail>) {
      state.movieDetail = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice;
