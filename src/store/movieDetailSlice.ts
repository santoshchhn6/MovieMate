import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CreditsProps,
  MovieInfoProps,
  MovieProps,
  ReviewProps,
  VideoProps,
} from "../type";

type MovieState = {
  credits: CreditsProps;
  reviews: ReviewProps[];
  videos: VideoProps[];
  details: MovieInfoProps;
  recommendations: MovieProps[];
};

const initialState: MovieState = {
  credits: {
    cast: [],
    crew: [],
  },
  reviews: [],
  videos: [],
  details: {
    id: 0,
    title: "",
    genres: [],
    vote_average: 0,
    release_date: "",
    budget: 0,
    revenue: 0,
    runtime: 0,
    poster_path: "",
    backdrop_path: "",
    overview: "",
    adult: true,
    tagline: "",
  },
  recommendations: [],
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
    addRecommendations(state, action: PayloadAction<MovieProps[]>) {
      state.recommendations = action.payload;
    },
  },
});

export const movieDetailAction = movieDetailSlice.actions;
export default movieDetailSlice;
