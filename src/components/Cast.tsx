import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { fetchCast } from "../redux/movie_action";
import useWindowSize from "../customHooks/useWindowSize";
import Arrow from "./Buttons/Arrow";
import { heading } from "../style/style";
import ImageComponent from "./ImageComponent";

type Props = {
  movieId: number;
};

const Cast = ({ movieId }: Props) => {
  const actors = useSelector((state: RootState) => state.cast.actors);
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchCast(movieId));
  }, [movieId, dispatch]);

  const { width } = useWindowSize();
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);
  const poster_width = 200;
  const poster_height = 300;
  const poster_gap = 20;
  const totalPostersLenth = actors.length * (poster_width + poster_gap);

  const handleLeftClick = () => {
    if (translateX - width >= 0) {
      setTranslateX((translateX) => translateX - width);
      setDisableRightArrow(false);
    }
    if (translateX - 2 * width < 0) {
      setTranslateX(0);
      setDisableLeftArrow(true);
    }
  };

  const handleRightClick = () => {
    if (translateX + width <= totalPostersLenth) {
      setTranslateX((translateX) => translateX + width);
      setDisableLeftArrow(false);
    }
  };

  return (
    <div className="p-5">
      <h2 className={heading}>Cast</h2>
      <div className=" w-[100%] h-[400px] relative overflow-hidden">
        <div
          className=" absolute flex gap-5 text-center ease-in-out duration-500"
          style={{
            translate: `-${translateX}px 0px`,
            gap: `${poster_gap}px`,
          }}
        >
          {actors.map((actor) => (
            <div key={actor.id} className="">
              <ImageComponent
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                className="min-w-[200px] min-h-[300px] rounded-lg object-contain bg-[#51627E]"
              />
              <p className="text-[18px] font-['Poppin-sb'] my-2">
                {actor.name}
              </p>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
        <div
          className=" absolute left-3"
          style={{ top: `${poster_height / 2}px` }}
        >
          <Arrow
            direction="left"
            onClick={handleLeftClick}
            disabled={disableLeftArrow}
          />
        </div>
        <div
          className={` absolute right-3`}
          style={{ top: `${poster_height / 2}px` }}
        >
          <Arrow
            direction="right"
            onClick={handleRightClick}
            disabled={disableRightArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Cast;
