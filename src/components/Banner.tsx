import { useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import { useEffect, useState } from "react";
import {
  fetchMovieGenre,
  fetchMovieTrailer,
  fetchTrendingMovie,
} from "../store/api/movieApi";
import { useDispatch } from "react-redux";
import { getFormatedDate } from "../utils/date";
import Rating from "./Rating";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useWindowSize from "../utils/hooks/useWindowSize";
import loadingImg from "../assets/loading.gif";
import YoutubePlayer from "./YoutubePlayer";
import { showVideoPlayer } from "../store/videoPlayerSlice";

const Banner = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.trending
  );
  const genres = useSelector((state: RootState) => state.movies.genres);
  const { width } = useWindowSize();
  const [x, setX] = useState(0);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovieGenre());
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingMovie(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x >= movies.length * width) setX(0);
      else setX((x) => x + width);
    }, 7000);

    return () => clearInterval(interval);
  }, [movies.length, width, x]);

  const onClickTrailerHandler = (id: number) => {
    dispatch(fetchMovieTrailer(id));
    dispatch(showVideoPlayer());
  };

  return (
    <div className=" h-[600px] overflow-hidden ">
      {!loading ? (
        <div
          className=" h-[100%] flex ease-in-out duration-[5s]"
          style={{ width: `${width}px`, transform: `translateX(-${x}px)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{ minWidth: `${width}px`, height: "100%" }}
              className="relative "
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                style={{ width: `100%`, height: "100%" }}
                className="absolute object-cover"
              />
              <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-black  via-black/0 via-50%  to-black "></div>
              <div className="absolute w-[100%] h-[100%] ">
                <div className="w-[40%] ml-[50px] mt-[40px]">
                  <h1 className="text-[50px] mb-3 font-['Poppin-sb']">
                    {movie.title.toUpperCase()}
                  </h1>
                  <Rating rating={movie.vote_average} />
                  <p className="text-[20px] my-3 font-['Poppin']">
                    {getFormatedDate(movie ? movie?.release_date : "")}
                  </p>

                  <div className="flex gap-3 text-[18px] font-['SansPro-sb'] my-3 cursor-pointer">
                    {movie.genre_ids?.map((id, index) => (
                      <span
                        key={index}
                        className="border border-blue-600 px-3 rounded-full bg-black/90"
                      >
                        {genres.find((genre) => genre.id === id)?.name}
                      </span>
                    ))}
                  </div>
                  <p className="mb-3 text-[20px] font-['OpenSans']">
                    {movie.overview}
                  </p>
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 px-2 py-1 rounded-md font-['OpenSans-b'] flex gap-1 items-center"
                      onClick={() => onClickTrailerHandler(movie.id)}
                    >
                      <BsFillPlayFill size={24} />
                      Trailer
                    </button>

                    <Link
                      to={`/movie/${movie.id}`}
                      className="bg-blue-600 px-2 py-1 rounded-md font-['OpenSans-b'] flex gap-1 items-center"
                    >
                      More about
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <img src={loadingImg} alt="" className="w-[100px] h-[100px]" />
        </div>
      )}

      <YoutubePlayer />
    </div>
  );
};

export default Banner;
