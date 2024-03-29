import { useSelector } from "react-redux";
import { RootState } from "../store";
import Videos from "./Videos";
import Slider from "./Slider";
import { heading, leftMargin } from "../style/style";

const FetchVideo = () => {
  const videos = useSelector((state: RootState) => state.movieDetail.videos);

  return (
    <>
      <h1 className={heading}>Videos</h1>
      <Slider
        dataLength={videos.length}
        poster_width={480}
        poster_height={270 + 60}
        poster_gap={20}
      >
        <Videos data={videos} />
      </Slider>
    </>
  );
};

export default FetchVideo;
