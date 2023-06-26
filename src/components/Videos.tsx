import { useDispatch, useSelector } from "react-redux";
import { container, heading } from "../style/style";
import { RootState, appDispatch } from "../redux";
import { useEffect } from "react";
import { fetchMovieVideos } from "../redux/movie_action";
import { AiFillPlayCircle } from "react-icons/ai";

type Props = {
  movieId: number;
};

const Videos = ({ movieId }: Props) => {
  const dispatch = useDispatch<appDispatch>();
  const videos = useSelector((state: RootState) => state.movie.videos);

  useEffect(() => {
    dispatch(fetchMovieVideos(movieId));
  }, [movieId, dispatch]);
  return (
    <div className={container}>
      <h2 className={heading}>Videos</h2>
      <div className="flex gap-5">
        {videos.map((video) => (
          <div className=" cursor-pointer">
            <div className="relative  ">
              <img
                className=" object-cover min-w-[480px] h-[270px] rounded-xl"
                src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              />
              <AiFillPlayCircle
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white/0"
                size={80}
              />
            </div>
            <span className="font-['Poppin'] text-[20px] ">{video?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
