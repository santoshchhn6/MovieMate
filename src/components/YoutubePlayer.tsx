import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";
import YouTube, { YouTubeProps } from "react-youtube";
import ButtonExit from "./Buttons/ButtonExit";
import { hideVideoPlayer } from "../store/videoPlayerSlice";

const YoutubePlayer = () => {
  const videoPlayer = useSelector((state: RootState) => state.videoPlayer);
  const { show_video_player, videoId } = videoPlayer;
  const dispatch = useDispatch<appDispatch>();

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const handleCloseTrailer = () => {
    dispatch(hideVideoPlayer());
  };
  return (
    <>
      {videoId && show_video_player ? (
        <div className="fixed  w-[800px] h-[450px]  z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%]">
          <div className="flex justify-between items-center w-[100%] h-[40px]  bg-gray-950">
            <span className="ml-5 text-[20px]">Trailer</span>

            <ButtonExit onClick={handleCloseTrailer} />
          </div>
          <YouTube
            videoId={videoId}
            opts={{
              width: "800",
              height: "450",
              playerVars: {
                autoplay: 0,
              },
            }}
            onReady={onPlayerReady}
          />
        </div>
      ) : null}
    </>
  );
};

export default YoutubePlayer;
