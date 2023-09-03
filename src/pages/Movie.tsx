import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appDispatch } from "../store";
import MovieBanner from "../components/MovieBanner";
import FetchCast from "../components/FetchCast";
import Reviews from "../components/Reviews";
import FetchVideo from "../components/FetchVideo";
import YoutubePlayer from "../components/YoutubePlayer";
import {
  fetchCredits,
  fetchMovieDetail,
  fetchMovieVideos,
  fetchRecommendations,
  fetchReviews,
} from "../store/api/movieApi";
import Recommendation from "../components/Recommendation";

const Movie = () => {
  const { id } = useParams();

  const dispatch = useDispatch<appDispatch>();

  const fetchAllMovieDetails = (movieId: number) => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchCredits(movieId));
    dispatch(fetchReviews(movieId));
    dispatch(fetchMovieVideos(movieId));
    dispatch(fetchRecommendations(movieId));
  };

  useEffect(() => {
    fetchAllMovieDetails(Number(id));
  }, [id, dispatch]);

  return (
    <>
      <MovieBanner />

      <FetchCast />

      <Reviews />

      <FetchVideo />

      <Recommendation />

      <YoutubePlayer />
    </>
  );
};

export default Movie;
