import SearchResult from "./SearchResult";
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import NowPlayingMovie from "./NowPlayingMovie";
import TopRatedMovie from "./TopRatedMovie";

const Home = () => {
  return (
    <div>
      <SearchResult />
      <PopularMovie />
      <UpcomingMovie />
      <NowPlayingMovie />
      <TopRatedMovie />
    </div>
  );
};

export default Home;
