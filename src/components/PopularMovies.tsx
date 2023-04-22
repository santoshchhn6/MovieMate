import { useState, useEffect } from "react";
import Arrow from "./Buttons/Arrow";
import useWindowSize from "../useWindowSize";

interface Movie {
  id: string;
  title: string;
  date: string;
  poster_path: string;
  release_date: string;
}

const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(true);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  const { width } = useWindowSize();
  const [translateX, setTranslateX] = useState<number>(0);
  const poster_width = 200;
  const poster_height = 300;
  const poster_gap = 10;
  const totalPostersLenth = movies.length * (poster_width + poster_gap);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fd94b9ae90f9731350633c678688c966"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

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
      setTranslateX(totalPostersLenth - width);
      setDisableRightArrow(true);
      console.log("right_click");
    }
  };

  return (
    <div>
      <h2>
        {width}" "{translateX}" "{totalPostersLenth}
      </h2>
      <h2>Popular Movies</h2>
      <div className="w-[100%] relative">
        <ul
          className={`border-2 border-green-600 flex absolute ease-in-out duration-500`}
          style={{ translate: `-${translateX}px 0px`, gap: `${poster_gap}px` }}
        >
          {movies.map((movie) => (
            <li key={movie.id} className="border">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className={`min-w-[${poster_width}px] min-h-[${poster_height}px] object-cover`}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </li>
          ))}
        </ul>

        <div
          className={`border-2 border-red-600 w-[100%] h-[${poster_height}px] absolute flex justify-between items-center p-2`}
        >
          <Arrow
            direction="left"
            onClick={handleLeftClick}
            disabled={disableLeftArrow}
          />
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

export default PopularMovies;
