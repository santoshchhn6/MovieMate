import { useSelector } from "react-redux";
import YouTube, { YouTubeProps } from "react-youtube";
import { RootState, appDispatch } from "../redux";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/movieSlice";

const Trailer = () => {
  const movie = useSelector((state: RootState) => state.movie);
  const { trailer, showTrailer } = movie;
  const dispatch = useDispatch<appDispatch>();

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const handleCloseTrailer = () => {
    dispatch(movieAction.setShowTrailer(false));
  };
  return (
    <>
      {trailer && showTrailer ? (
        <div className="fixed  w-[960px] h-[540px]  z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-between items-center w-[100%] h-[40px]  bg-gray-950">
            <span className="ml-5 text-[20px]">Trailer</span>
            <button
              className="w-[40px] aspect-square text-[20px] font-semibold text-center bg-blue-600 hover:bg-red-600"
              onClick={handleCloseTrailer}
            >
              X
            </button>
          </div>
          <YouTube
            videoId={trailer}
            opts={{
              width: "960",
              height: "540",
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

export default Trailer;
