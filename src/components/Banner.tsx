import { useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { useEffect, useState } from "react";
import { fetchPopularMovie } from "../redux/movie_action";
import { useDispatch } from "react-redux";
import useWindowSize from "../useWindowSize";
import { getFormatedDate } from "../date";
import Rating from "./Rating";

const Banner = () => {
  const popular = useSelector((state: RootState) => state.popular);
  const dispatch = useDispatch<appDispatch>();

  const { width } = useWindowSize();
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (x >= popular.movies.length * width) setX(0);
      else setX((x) => x + width);
    }, 7000);

    return () => clearInterval(interval);
  }, [popular.movies.length, width, x]);

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);

  console.log({
    width,
  });

  return (
    <div className="absolute  w-[100%] h-[100%] overflow-hidden">
      <div
        className=" h-[100%] flex ease-in-out duration-[5s]"
        style={{ width: `${width}px`, transform: `translateX(-${x}px)` }}
      >
        {popular.movies.map((movie, index) => (
          <div
            key={index}
            style={{ minWidth: `${width}px`, height: "100%" }}
            className="relative "
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              style={{ width: `100%`, height: "100%" }}
              className="absolute object-fill"
            />
            <div className="absolute w-[100%] h-[100%] bg-black/50"></div>
            <div className="absolute w-[100%] h-[100%] ">
              <div className="ml-[50px] mt-[200px]">
                <h1 className="text-[50px]">{movie.title}</h1>
                <p className="text-[20px]">
                  {" "}
                  {getFormatedDate(movie ? movie?.release_date : "")}
                </p>
                <Rating />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
