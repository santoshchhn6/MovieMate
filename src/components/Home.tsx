import SearchResult from "./SearchResult";
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import NowPlayingMovie from "./NowPlayingMovie";
import TopRatedMovie from "./TopRatedMovie";
import Header from "./Header";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { appDispatch } from "../redux";
import { useEffect } from "react";
import { fetchMovieGenre } from "../redux/movie_action";

const Home = () => {
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovieGenre());
  }, [dispatch]);

  return (
    <div>
      <Banner />

      {/* <SearchResult /> */}
      <PopularMovie />
      {/* <UpcomingMovie /> */}
      {/* <NowPlayingMovie /> */}
      {/* <TopRatedMovie /> */}
    </div>
  );
};

export default Home;
