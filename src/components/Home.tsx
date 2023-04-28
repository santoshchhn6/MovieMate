import useWindowSize from "../useWindowSize";
import MovieList from "./MovieList";

const Home = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <MovieList title="Popular" type="popular" width={width} />
      <MovieList title="Upcoming" type="upcoming" width={width} />
      <MovieList title="Now Playing" type="now_playing" width={width} />
      <MovieList title="Top rated" type="top_rated" width={width} />
    </div>
  );
};

export default Home;
