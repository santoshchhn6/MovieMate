import { useSelector } from "react-redux";
import useWindowSize from "../useWindowSize";
import { RootState } from "../redux";
import FetchMovies from "./FetchMovies";

const Home = () => {
  const { width } = useWindowSize();
  const search = useSelector((state: RootState) => state.app.search);
  console.log({ search });
  return (
    <div>
      <FetchMovies title="Popular" type="popular" width={width} />
      <FetchMovies title="Upcoming" type="upcoming" width={width} />
      <FetchMovies title="Now Playing" type="now_playing" width={width} />
      <FetchMovies title="Top rated" type="top_rated" width={width} />
    </div>
  );
};

export default Home;
