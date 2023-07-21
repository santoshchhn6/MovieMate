import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { useEffect } from "react";
import { fetchMovieVideos } from "../redux/movie_action";
import Videos from "./Videos";
import Slider from "./Slider";
import { container, heading } from "../style/style";

type Props = {
  movieId: number;
};

const FetchVideo = ({ movieId }: Props) => {
  const dispatch = useDispatch<appDispatch>();
  const videos = useSelector((state: RootState) => state.movie.videos);

  useEffect(() => {
    dispatch(fetchMovieVideos(movieId));
  }, [movieId, dispatch]);

  //   console.log({ videos });
  return (
    <div className={container}>
      <h1 className={heading}>Videos</h1>
      <Slider
        dataLength={videos.length}
        poster_width={480}
        poster_height={270 + 60}
        poster_gap={20}
      >
        <Videos data={videos} />
      </Slider>
    </div>
  );
};

export default FetchVideo;
