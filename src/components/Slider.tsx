import { useState, useEffect } from "react";
import Arrow from "./Buttons/Arrow";
import Poster from "./Poster";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface Movie {
  id: string;
  title: string;
  date: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

interface Props {
  width: number;
  type: string;
  title: string;
}

const Slider = ({ width, type, title }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  //   const { width } = useWindowSize();
  const [translateX, setTranslateX] = useState<number>(0);
  const poster_width = 200;
  const poster_height = 300;
  const poster_gap = 10;
  const totalPostersLenth = movies.length * (poster_width + poster_gap);

  useEffect(() => {
    console.log("effect");

    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      });
  }, [currentPage]);

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
        setCurrentPage((currentPage) => currentPage + 1);
      }
      setTranslateX(totalPostersLenth - width);
      // setDisableRightArrow(true);
      console.log("right_click");
    }
  };

  return (
    <div className="my-3">
      <h2 className="mb-3 font-bold text-2xl">{title}</h2>
      <div
        className=" w-[100%] relative overflow-hidden"
        style={{ height: `${poster_height + 45}px` }}
      >
        <div
          className={` w-[100%] flex absolute ease-in-out duration-500 `}
          style={{ translate: `-${translateX}px 0px`, gap: `${poster_gap}px` }}
        >
          {movies.map((movie, i) => (
            <Poster
              key={i}
              title={movie.title}
              width={poster_width}
              height={poster_height}
              poster_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
        </div>

        {/* <div
          className={`border w-[100%] absolute top-[${poster_width}px]  flex justify-between items-center p-2`}
        > */}
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slider;
