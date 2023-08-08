import Poster from "./Poster";
import { MovieProps } from "../utils/type";
import spinner from "../assets/loading.gif";
interface Props {
  movies: MovieProps[] | undefined;
  nextPage: () => void;
  loading: boolean;
}

const MovieList = ({ movies, nextPage, loading }: Props) => {
  return (
    <div className=" flex justify-center">
      {movies?.length || !loading ? (
        <div className="w-[100%] p-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ease-in-out duration-500 ">
          {movies?.map((movie, i) => (
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
            className="w-[200px] h-[300px]  bg-gray-900 border text-blue-600 border-blue-600 hover:border-white hover:text-white cursor-pointer rounded-xl flex justify-center items-center text-[30px] font-['SansPro-sb']"
          >
            {loading ? (
              <img src={spinner} alt="" className="w-[100px] h-[100px]" />
            ) : (
              <span>More</span>
            )}
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src={spinner} alt="" className="w-[100px] h-[100px]" />
        </div>
      )}
    </div>
  );
};

export default MovieList;
