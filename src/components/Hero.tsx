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
import {
  button1,
  button2,
  content,
  font2,
  heading1,
  heading2,
  margin,
  padding,
} from "../style/style";
import { MovieProps } from "../type";
import MovieGenre from "./MovieGenre";
import ReadMore from "./Buttons/ReadMore";

const Hero = () => {
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.trending
  );

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovieGenre());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingMovie(currentPage));
  }, [currentPage, dispatch]);

  if (loading) {
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <img src={loadingImg} alt="" className="w-[100px] h-[100px]" />
      </div>
    );
  }

  return (
    <div className=" h-[70vh] overflow-hidden ">
      <ScrollingBanner movies={movies} />
      <YoutubePlayer />
    </div>
  );
};

function ScrollingBanner({ movies }: { movies: MovieProps[] }) {
  const { width } = useWindowSize();
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x >= movies.length * width) setX(0);
      else setX((x) => x + width);
    }, 7000);

    return () => clearInterval(interval);
  }, [movies.length, width, x]);

  return (
    <div
      className=" h-[100%] flex ease-in-out duration-[5s]"
      style={{ width: `${width}px`, transform: `translateX(-${x}px)` }}
    >
      {movies.map((movie, index) => (
        <MoviePoster key={index} width={width} movie={movie} />
      ))}
    </div>
  );
}

function MoviePoster({ width, movie }: { width: number; movie: MovieProps }) {
  return (
    <div
      style={{ minWidth: `${width}px`, height: "100%" }}
      className="relative"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        style={{ width: `100%`, height: "100%" }}
        className="absolute object-cover"
      />
      <BackgroundTint />
      <MovieInfo movie={movie} />
    </div>
  );
}

function MovieInfo({ movie }: { movie: MovieProps }) {
  const { genres } = useSelector((state: RootState) => state.genre);
  const movie_genre = movie?.genre_ids.map((id) =>
    genres.find((genre) => genre.id === id)
  );
  return (
    <div
      className={`absolute w-full bg-gradient-to-t from-black via-black/50 to-transparent bottom-0 flex justify-center sm:justify-between flex-wrap gap-5 items-end  py-6 mt-[4rem] ${padding}`}
    >
      <div>
        <h1 className={`text-3xl mb-3 font-['Poppin-sb']`}>
          {movie.title.toUpperCase()}
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <MovieGenre genres={movie_genre} />
          <span className="hidden sm:inline">|</span>
          <p className={font2}>
            {getFormatedDate(movie ? movie?.release_date : "")}
          </p>
          <span className="hidden sm:inline">|</span>
          <Rating rating={movie.vote_average} />
        </div>
      </div>

      <div className="flex gap-3 ">
        <TrailerButton id={movie.id} />
        <MoreAboutButton id={movie.id} />
      </div>
    </div>
  );
}

function TrailerButton({ id }: { id: number }) {
  const dispatch = useDispatch<appDispatch>();
  return (
    <button
      className={button1}
      onClick={() => {
        dispatch(fetchMovieTrailer(id));
        dispatch(showVideoPlayer());
      }}
    >
      {/* Icon */}
      <BsFillPlayFill size={24} />
      Trailer
    </button>
  );
}
function BackgroundTint() {
  return (
    <div className="absolute w-[100%] h-[100%] flex ">
      <div className="w-1/2 h-full  bg-gradient-to-r from-black  via-transparent to-transparent"></div>
      <div className="w-1/2 h-full  bg-gradient-to-r from-transparent  via-transparent to-black"></div>
    </div>
  );
}

function MoreAboutButton({ id }: { id: number }) {
  return (
    <Link to={`/movie/${id}`} className={button2}>
      More about
    </Link>
  );
}

export default Hero;
