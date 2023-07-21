import { container, heading } from "../style/style";
import { AiFillPlayCircle } from "react-icons/ai";
import { VideoType } from "../type";

type Props = {
  data: VideoType[];
  poster_width?: number;
  poster_height?: number;
  poster_gap?: number;
};

const Videos = ({ data, poster_height, poster_width, poster_gap }: Props) => {
  console.log({ data });
  return (
    <div className="flex" style={{ gap: `${poster_gap}px` }}>
      {data.map((video) => (
        <div className=" cursor-pointer" key={video.id}>
          <div className="relative  ">
            <img
              className=" object-cover min-w-[480px] h-[270px] rounded-xl"
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              style={{
                minWidth: `${poster_width}px`,
                height: `${poster_height}px`,
              }}
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
  );
};

export default Videos;
