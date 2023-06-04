import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormatedDate, getFormatedTime } from "../date";
import { formatter } from "../currency";
import { BsFillPlayFill } from "react-icons/bs";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { appDispatch } from "../redux";
import { fetchMovieTrailer } from "../redux/movie_action";
import { movieAction } from "../redux/movieSlice";
import Trailer from "./Trailer";
import Cast from "./Cast";

interface MovieDetail {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  vote_average: number;
  release_date: string;
  budget: number;
  revenue: number;
  runtime: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  adult: boolean;
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail>();

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const onClickTrailerHandler = (id: number) => {
    dispatch(fetchMovieTrailer(id));
    dispatch(movieAction.setShowTrailer(true));
  };
  return (
    <div>
      {/* Hero */}
      <div className="relative w-[100%] h-[700px] overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={`${movie?.title}`}
          className="absolute w-[100%] h-[100%] blur-lg"
        />

        <div className="absolute flex items-center justify-center w-[100%] h-[100%] bg-gradient-to-r from-black/90 via-black/50 to-black/90">
          <div className=" w-[80%] flex gap-10  ">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
              className="w-[300px] h-[450px] rounded-md"
            />
            <div>
              <h1 className="text-[50px] mb-3 font-['Poppin-sb']">
                {movie?.title.toUpperCase()}
              </h1>

              <Rating rating={movie ? movie.vote_average : 0} />

              <div className="flex gap-5 my-5 font-['Poppin'] text-[24px]">
                <span className="font-semibold">
                  {getFormatedDate(movie ? movie?.release_date : "")}
                </span>
                <span>{getFormatedTime(movie ? movie?.runtime : 0)}</span>
                <span className="font-semibold">
                  {movie?.adult ? "A" : "UA"}
                </span>
              </div>

              <div className="flex gap-3  text-[20px] font-['SansPro-sb'] mb-5">
                {movie?.genres.map((e) => (
                  <span
                    key={e.id}
                    className=" bg-black/50 border border-white px-3   rounded-full "
                  >
                    {e.name}
                  </span>
                ))}
              </div>

              <p className="text-[20px] mb-5 font-['OpenSans']">
                {movie?.overview}
              </p>

              <button
                className="bg-blue-600 text-[20px] px-4 py-1 rounded-md font-['OpenSans-b'] flex gap-1 items-center"
                onClick={() => onClickTrailerHandler(movie ? movie.id : 0)}
              >
                <BsFillPlayFill />
                Watch Trailer
              </button>

              {/* {movie?.budget ? (
              <p>Budget : {formatter.format(movie ? movie.budget : 0)}</p>
            ) : null}
            {movie?.revenue ? (
              <p>Revenue : {formatter.format(movie ? movie.revenue : 0)}</p>
            ) : null} */}
            </div>
          </div>
        </div>
        <Trailer />
      </div>

      {/* cast */}
      <Cast movieId={movie ? movie.id : 0} />
    </div>
  );
};

export default MovieDetail;
