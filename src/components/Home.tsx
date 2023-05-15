import SearchResult from "./SearchResult";
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import NowPlayingMovie from "./NowPlayingMovie";
import TopRatedMovie from "./TopRatedMovie";
import Header from "./Header";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="w-[1440px] h-[810px] relative">
      <Banner />
      {/* <img
        src="https://image.tmdb.org/t/p/original/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg"
        alt=""
        className="absolute w-[100%] h-[100%] object-cover "
      /> */}
      {/* <div className="absolute w-[100%] h-[100%] bg-black/50"></div> */}
      <Header />
      {/* <SearchResult /> */}
      {/* <PopularMovie /> */}
      {/* <UpcomingMovie /> */}
      {/* <NowPlayingMovie /> */}
      {/* <TopRatedMovie /> */}
    </div>
  );
};

export default Home;
