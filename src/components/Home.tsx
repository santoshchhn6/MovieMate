import SearchResult from "./SearchResult";
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import NowPlayingMovie from "./NowPlayingMovie";
import TopRatedMovie from "./TopRatedMovie";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { appDispatch } from "../redux";
import { useEffect } from "react";
import { fetchMovieGenre } from "../redux/movie_action";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { movieAction } from "../redux/movieSlice";

const Home = () => {
  const movieSelected = useSelector(
    (state: RootState) => state.movie.movieSelected
  );
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchMovieGenre());
  }, [dispatch]);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(movieAction.setSelectedMovie(event.target.value));
  };

  return (
    <div>
      <Banner />

      <select
        onChange={handleOnChange}
        className="m-5 p-2 w-[220px]  bg-blue-600 text-xl outline-none rounded-lg font-['Poppin-sb']"
      >
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
        <option value="nowPlaying">Now Playing</option>
        <option value="topRated">Top Rated</option>
      </select>
      {movieSelected === "popular" ? <PopularMovie /> : null}
      {movieSelected === "upcoming" ? <UpcomingMovie /> : null}
      {movieSelected === "nowPlaying" ? <NowPlayingMovie /> : null}
      {movieSelected === "topRated" ? <TopRatedMovie /> : null}
    </div>
  );
};

export default Home;
