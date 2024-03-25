import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import Rating from "./Rating";
import { getFormatedDate, getFormatedTime } from "../utils/date";
import { BsFillPlayFill } from "react-icons/bs";
import { setVideoId, showVideoPlayer } from "../store/videoPlayerSlice";
import { content, heading1, heading2, heading3, margin } from "../style/style";
import MovieGenre from "./MovieGenre";

const MovieBanner = () => {
  const {
    details: movie,
    videos,
    credits,
  } = useSelector((state: RootState) => state.movieDetail);

  const director = credits.crew.find(
    (e: { job: string }) => e.job === "Director"
  )?.name;
  const writer = credits.crew.find(
    (e: { job: string }) => e.job === "Writer"
  )?.name;
  const dispatch = useDispatch<appDispatch>();

  const onClickTrailerHandler = () => {
    const trailerId = videos.find(
      (e: { type: string }) => e?.type === "Trailer"
    )?.key;
    dispatch(setVideoId(trailerId as string));
    dispatch(showVideoPlayer());
  };
  return (
    <div className="relative w-[100%] h-[700px] overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={`${movie?.title}`}
        className="absolute w-[100%] h-[100%] blur-lg"
      />

      <div className="absolute flex items-center  w-[100%] h-[100%] bg-gradient-to-r from-black/90 via-black/50 to-black/90">
        <div className={`  w-[80%] flex gap-10 ${margin} `}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
              className="min-w-[300px] h-[450px] rounded-md "
            />
            <button
              className="w-[100%] h-[60px] bg-blue-600 text-[25px] mt-5 px-2 rounded-md font-['Poppin-b'] flex gap-5 items-center "
              onClick={onClickTrailerHandler}
            >
              <BsFillPlayFill size={50} />
              <span>Watch Trailer</span>
            </button>
          </div>

          <div>
            <h1 className={heading1}>{movie?.title.toUpperCase()}</h1>

            <Rating rating={movie ? movie.vote_average : 0} />

            <div className={`flex gap-5 ${heading3}`}>
              <span className="font-semibold">
                {getFormatedDate(movie ? movie?.release_date : "")}
              </span>
              <span>{getFormatedTime(movie ? movie?.runtime : 0)}</span>
              <span className="font-semibold">{movie?.adult ? "A" : "UA"}</span>
            </div>

            <MovieGenre genres={movie.genres} />

            <p className={content}>{movie?.overview}</p>

            <div className=" flex justify-between">
              <div>
                <p className="font-['Poppin-sb'] text-[24px]">Director</p>
                <p className="font-['Poppin'] text-[24px]">{director}</p>
              </div>
              {writer && (
                <div>
                  <p className="font-['Poppin-sb'] text-[24px]">Writer</p>
                  <p className="font-['Poppin'] text-[24px]">{writer}</p>
                </div>
              )}
            </div>

            {/* {movie?.budget ? (
          <p>Budget : {formatter.format(movie ? movie.budget : 0)}</p>
        ) : null}
        {movie?.revenue ? (
          <p>Revenue : {formatter.format(movie ? movie.revenue : 0)}</p>
        ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
