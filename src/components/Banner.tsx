import { useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { useEffect, useState } from "react";
import { fetchPopularMovie } from "../redux/movie_action";
import { useDispatch } from "react-redux";
import useWindowSize from "../useWindowSize";

const Banner = () => {
  const popular = useSelector((state: RootState) => state.popular);
  const dispatch = useDispatch<appDispatch>();

  const { width } = useWindowSize();
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x >= popular.movies.length * width) setX(0);
      else setX((x) => x + width);
    }, 3000);

    return () => clearInterval(interval);
  }, [popular.movies.length, width, x]);

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);

  return (
    <div className="absolute  w-[100%] h-[100%] overflow-hidden">
      <div
        className=" w-[100%] h-[100%] flex ease-in-out duration-500"
        style={{ transform: `translateX(-${x}px)` }}
      >
        {popular.movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            className={`w-[${width}px]`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
