import Poster from "./Poster";
import { MovieProps } from "../type";
import spinner from "../assets/loading.gif";
interface Props {
  movies: MovieProps[];
  nextPage: () => void;
  loading: boolean;
}

const MovieList = ({ movies, nextPage, loading }: Props) => {
  const renderSpinner = () => (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <img src={spinner} alt="Loading..." className="w-[100px] h-[100px]" />
    </div>
  );

  const renderMoviePosters = () => (
    <div className="w-[100%] my-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ease-in-out duration-500">
      {movies?.map((movie, i) => (
        <Poster
          key={movie.id}
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
        className="w-[200px] h-[300px] bg-gray-900 border text-blue-600 border-blue-600 hover:border-white hover:text-white cursor-pointer rounded-xl flex justify-center items-center text-[30px] font-['SansPro-sb']"
      >
        {loading ? renderSpinner() : <span>More</span>}
      </div>
    </div>
  );

  const renderMovieList = () => {
    if (movies?.length > 0 && !loading) {
      return renderMoviePosters();
    } else {
      return renderSpinner();
    }
  };

  return <div className="flex justify-center">{renderMovieList()}</div>;
};

export default MovieList;
