import { useDispatch } from "react-redux";
import { VideoType } from "../type";
import { BsPlayCircle } from "react-icons/bs";
import { appDispatch } from "../redux";
import { setVideoId, showVideoPlayer } from "../redux/videoPlayerSlice";

type Props = {
  data: VideoType[];
  poster_width?: number;
  poster_height?: number;
  poster_gap?: number;
};

const Videos = ({
  data,
  poster_height = 270,
  poster_width = 480,
  poster_gap = 20,
}: Props) => {
  const dispatch = useDispatch<appDispatch>();
  const handleOnPlay = (id: string) => {
    dispatch(showVideoPlayer());
    dispatch(setVideoId(id));
  };
  return (
    <div className="flex" style={{ gap: `${poster_gap}px` }}>
      {data.map((video) => (
        <div className=" cursor-pointer" key={video.id}>
          <div
            className="relative"
            style={{
              minWidth: `${poster_width}px`,
              height: `${poster_height}px`,
            }}
          >
            <img
              className="absolute object-cover min-w-[480px] h-[270px] rounded-xl"
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
            />
            <BsPlayCircle
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-950 rounded-full text-blue-600 hover:text-white"
              size={80}
              onClick={() => handleOnPlay(video ? video.key : "")}
            />
          </div>
          <span className="font-['Poppin'] text-[20px] ">{video?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Videos;
