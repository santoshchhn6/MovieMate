import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormatedDate } from "../date";

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
  }, []);
  return (
    <div>
      {/* Poster and detail */}
      <div className="relative w-[100%] h-[807px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={`${movie?.title}`}
          className="absolute"
        />

        <div className="absolute w-[100%] h-[807px] bg-gray-950/80 px-[20px]">
          <div className="w-[50%]">
            <h1 className="text-[40px] font-semibold leading-[45px] mb-3">
              {movie?.title}
            </h1>
            <p className="text-[15px] mb-3">{movie?.overview}</p>

            <div className="flex gap-3 mb-3">
              <span>{getFormatedDate(movie ? movie?.release_date : "")}</span>
              <span>{movie?.runtime}</span>
            </div>

            <div className="flex gap-3 text-[16px] font-semibold mb-3">
              {movie?.genres.map((e) => (
                <span
                  key={e.id}
                  className="border border-white px-2 rounded-full"
                >
                  {e.name}
                </span>
              ))}
            </div>

            <p>{movie?.vote_average.toFixed(1)}</p>

            <p>{movie?.budget}</p>
            <p>{movie?.revenue}</p>

            <p>{movie?.adult}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;