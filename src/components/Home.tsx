import { useSelector } from "react-redux";
import FetchMovies from "./FetchMovies";
import SearchResult from "./SearchResult";
import { RootState } from "../redux";
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import NowPlayingMovie from "./NowPlayingMovie";

const Home = () => {
  // const movies = useSelector((state: RootState) => state.movies.popular);
  // console.log({ movies });
  return (
    <div>
      <SearchResult />

      <PopularMovie />
      <UpcomingMovie />
      <NowPlayingMovie />
      {/* <FetchMovies title="Popular" type="popular" />
      <FetchMovies title="Upcoming" type="upcoming" />
      <FetchMovies title="Now Playing" type="now_playing" />
      <FetchMovies title="Top rated" type="top_rated" /> */}
    </div>
  );
};

export default Home;
