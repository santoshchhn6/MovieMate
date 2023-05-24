import Poster from "./Poster";
import { Movie } from "../type";
interface Props {
  movies: Movie[];
  nextPage: () => void;
  loading: boolean;
}

const MovieList = ({ movies, nextPage, loading }: Props) => {
  return (
    <div className="w-[1440px] flex justify-center">
      {movies.length ? (
        <div className="w-[100%] p-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ease-in-out duration-500 ">
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
          <div
            onClick={nextPage}
            className="w-[200px] h-[300px] border hover:border-blue-600 hover:text-blue-600 cursor-pointer rounded-xl flex justify-center items-center text-[30px] font-['SansPro-sb']"
          >
            {loading ? <span>Loading...</span> : <span>More</span>}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieList;
