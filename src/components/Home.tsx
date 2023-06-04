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
        <option value="now_playing">Now Playing</option>
        <option value="top_rated">Top Rated</option>
      </select>
      <div className={`${movieSelected === "popular" ? "visible" : "hidden"} `}>
        <PopularMovie />
      </div>
      <div
        className={`${movieSelected === "upcoming" ? "visible" : "hidden"} `}
      >
        <UpcomingMovie />
      </div>
      <div
        className={`${movieSelected === "now_playing" ? "visible" : "hidden"} `}
      >
        <NowPlayingMovie />
      </div>
      <div
        className={`${movieSelected === "top_rated" ? "visible" : "hidden"} `}
      >
        <TopRatedMovie />
      </div>
    </div>
  );
};

export default Home;
