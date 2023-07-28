import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import { fetchMovieDetail, fetchMovieTrailer } from "../store/api/movieApi";
import Reviews from "../components/Reviews";
import FetchVideo from "../components/api/FetchVideo";
import FetchCast from "../components/api/FetchCast";
import YoutubePlayer from "../components/YoutubePlayer";
import MovieBanner from "../components/MovieBanner";

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovieDetail(Number(id)));
  }, [id, dispatch]);

 
  return (
    <div>
      <MovieBanner />

      <FetchCast />

      <Reviews />

      <FetchVideo />

      <YoutubePlayer />
    </div>
  );
};

export default MovieDetail;
