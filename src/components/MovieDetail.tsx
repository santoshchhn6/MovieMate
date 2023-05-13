import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormatedDate, getFormatedTime } from "../date";
import { formatter } from "../currency";

interface MovieDetail {
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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);
  return (
    <div>
      {/* Poster and detail */}
      <div className="relative w-[100%] h-[807px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={`${movie?.title}`}
          className="absolute"
        />

        <div className="absolute w-[100%] h-[807px] bg-gradient-to-r from-gray-950 to-gray-950/0 p-[20px] ">
          <div className="w-[50%]">
            <h1 className="text-[40px] font-semibold leading-[45px] mb-5">
              {movie?.title.toUpperCase()} ({movie?.vote_average.toFixed(1)}/10)
            </h1>
            <p className="text-[15px] mb-5">{movie?.overview}</p>

            <div className="flex gap-5 mb-5">
              <span className="font-semibold">
                {getFormatedDate(movie ? movie?.release_date : "")}
              </span>
              <span>{getFormatedTime(movie ? movie?.runtime : 0)}</span>
              <span className="font-semibold">{movie?.adult ? "A" : "UA"}</span>
            </div>

            <div className="flex gap-3 text-[16px] font-semibold mb-5">
              {movie?.genres.map((e) => (
                <span
                  key={e.id}
                  className="border border-white px-2 rounded-full"
                >
                  {e.name}
                </span>
              ))}
            </div>

            {movie?.budget ? (
              <p>Budget : {formatter.format(movie ? movie.budget : 0)}</p>
            ) : null}
            {movie?.revenue ? (
              <p>Revenue : {formatter.format(movie ? movie.revenue : 0)}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
