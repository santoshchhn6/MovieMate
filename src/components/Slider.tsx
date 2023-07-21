import { PropsWithChildren, useState } from "react";
import Arrow from "./Buttons/Arrow";
import useWindowSize from "../customHooks/useWindowSize";

interface Props {
  dataLength: number;
  totalPages?: number;
  poster_width?: number;
  poster_height?: number;
  poster_gap?: number;
}

const Slider = (props: PropsWithChildren<Props>) => {
  const {
    dataLength,
    totalPages = 1,
    poster_height = 300,
    poster_width = 200,
    poster_gap = 20,
  } = props;
  const { width } = useWindowSize();
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPostersLenth = dataLength * (poster_width + poster_gap);

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
    if (translateX + 2 * width > totalPostersLenth) {
      if (currentPage <= totalPages) {
        setCurrentPage(currentPage + 1);
      }
      setTranslateX(totalPostersLenth - width);
      setDisableRightArrow(true);
    }
  };

  console.log({ width, totalPostersLenth, translateX });

  return (
    <>
      {dataLength ? (
        <div className="border border-red-600 my-3   bottom-[20px] w-[100%]">
          <div
            className=" w-[100%] relative overflow-hidden"
            style={{ height: `${poster_height}px` }}
          >
            {/* childrenWrapper */}
            <div
              className={`flex absolute ease-in-out duration-500 `}
              style={{
                translate: `-${translateX}px 0px`,
                gap: `${poster_gap}px`,
              }}
            >
              {props.children}
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
