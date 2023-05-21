import { useState } from "react";
import Arrow from "./Buttons/Arrow";
import Poster from "./Poster";
import { Movie } from "../type";
import useWindowSize from "../useWindowSize";

interface Props {
  title: string;
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Slider = ({
  title,
  movies,
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) => {
  const { width } = useWindowSize();
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);
  const poster_width = 200;
  const poster_height = 300;
  const poster_gap = 20;
  const totalPostersLenth = movies.length * (poster_width + poster_gap);

  const handleLeftClick = () => {
    if (translateX - width >= 0) {
      setTranslateX((translateX) => translateX - width);
      setDisableRightArrow(false);
      console.log("left_click");
    }
    if (translateX - 2 * width < 0) {
      setTranslateX(0);
      setDisableLeftArrow(true);
      console.log("left_click");
    }
  };

  const handleRightClick = () => {
    if (translateX + width <= totalPostersLenth) {
      setTranslateX((translateX) => translateX + width);
      setDisableLeftArrow(false);
      console.log("right_click");
    }
    if (translateX + 2 * width > totalPostersLenth) {
      if (currentPage <= totalPages) {
        setCurrentPage(currentPage + 1);
      }
      setTranslateX(totalPostersLenth - width);
      console.log("right_click");
    }
  };

  return (
    <>
      {movies.length ? (
        <div className="my-3  border absolute bottom-[20px] w-[100%]">
          {/* <h2 className="mb-3 font-bold text-2xl">{title}</h2> */}
          <div
            className=" w-[100%] relative overflow-hidden"
            style={{ height: `${poster_height}px` }}
          >
            <div
              className={` w-[100%] flex absolute ease-in-out duration-500 `}
              style={{
                translate: `-${translateX}px 0px`,
                gap: `${poster_gap}px`,
              }}
            >
              {movies.map((movie, i) => (
                <Poster
                  key={i}
                  id={movie.id}
                  title={movie.title}
                  width={poster_width}
                  height={poster_height}
                  poster_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
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
      ) : null}
    </>
  );
};

export default Slider;
