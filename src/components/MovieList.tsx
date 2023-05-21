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

const MovieList = ({ movies }: Props) => {
  return (
    <div className="w-[1440px] p-5 flex justify-center">
      {movies.length ? (
        <div
          className={` flex flex-wrap gap-5 justify-evenly ease-in-out duration-500`}
        >
          {movies.map((movie, i) => (
            <Poster
              key={i}
              id={movie.id}
              title={movie.title}
              width={200}
              height={300}
              poster_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      ) : (
        <span>no movie available</span>
      )}
    </div>
  );
};

export default MovieList;
