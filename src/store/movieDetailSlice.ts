import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CreditsProps,
  MovieInfoProps,
  ReviewProps,
  VideoProps,
} from "../utils/type";

type MovieState = {
  credits: CreditsProps;
  reviews: ReviewProps[];
  videos: VideoProps[];
  details: MovieInfoProps | null;
};

const initialState: MovieState = {
  credits: {
    cast: [],
    crew: [],
  },
  reviews: [],
  videos: [],
  details: null,
};

const movieDetailSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addCredits(state, action: PayloadAction<CreditsProps>) {
      state.credits = action.payload;
    },
    addVideos(state, action: PayloadAction<VideoProps[]>) {
      state.videos = action.payload;
    },
    addMovieDetails(state, action: PayloadAction<MovieInfoProps>) {
      state.details = action.payload;
    },
    addReviews(state, action: PayloadAction<ReviewProps[]>) {
      state.reviews = action.payload;
    },
  },
});

export const movieAction = movieDetailSlice.actions;
export default movieDetailSlice;
