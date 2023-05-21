import { useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { useEffect, useState } from "react";
import { fetchMovieTrailer, fetchTrendingMovie } from "../redux/movie_action";
import { useDispatch } from "react-redux";
import useWindowSize from "../useWindowSize";
import { getFormatedDate } from "../date";
import Rating from "./Rating";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { movieAction } from "../redux/movieSlice";
import Trailer from "./Trailer";

const Banner = () => {
  const popular = useSelector((state: RootState) => state.popular);
  const genres = useSelector((state: RootState) => state.movie.genres);
  const dispatch = useDispatch<appDispatch>();

  const { width } = useWindowSize();
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x >= popular.movies.length * width) setX(0);
      else setX((x) => x + width);
    }, 7000);

    return () => clearInterval(interval);
  }, [popular.movies.length, width, x]);

  useEffect(() => {
    dispatch(fetchTrendingMovie());
  }, [dispatch]);

  const onClickTrailerHandler = (id: number) => {
    dispatch(fetchMovieTrailer(id));
    dispatch(movieAction.setShowTrailer(true));
  };

  return (
    <div className="  w-[] h-[600px] overflow-hidden">
      <div
        className=" h-[100%] flex ease-in-out duration-[5s]"
        style={{ width: `${width}px`, transform: `translateX(-${x}px)` }}
      >
        {popular.movies.map((movie, index) => (
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
              <div className="w-[40%] ml-[50px] mt-[100px]">
                <h1 className="text-[50px] mb-3 font-['Poppin-sb']">
                  {movie.title.toUpperCase()}
                </h1>
                <Rating rating={movie.vote_average} />
                <p className="text-[20px] my-3 font-['Poppin']">
                  {getFormatedDate(movie ? movie?.release_date : "")}
                </p>

                <div className="flex gap-3 text-[18px] font-['SansPro-sb'] my-3">
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

      <Trailer />
    </div>
  );
};

export default Banner;
