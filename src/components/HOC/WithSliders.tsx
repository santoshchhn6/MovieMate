import { useState } from "react";
import useWindowSize from "../../customHooks/useWindowSize";
import Arrow from "../Buttons/Arrow";

type Props = {
  Component: React.ComponentType;
  dataLength: number;
  totalPages?: number;
  poster_width?: number;
  poster_height?: number;
};

const WithSliders = ({
  Component,
  dataLength,
  totalPages = 1,
  poster_height = 300,
  poster_width = 200,
}: Props) => {
  const EnhancedComponent = ({ dataLength, props }: any) => {
    const { width } = useWindowSize();
    const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
    const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
    const [translateX, setTranslateX] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const poster_gap = 20;
    const totalPostersLenth = dataLength * (poster_width + poster_gap);

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
      <div
        className=" w-[100%] relative overflow-hidden"
        style={{ height: `${poster_height}px` }}
      >
        <Component {...props} />
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
    );
  };
  return EnhancedComponent;
};

export default WithSliders;
