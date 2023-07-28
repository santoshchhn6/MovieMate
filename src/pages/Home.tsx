import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";
import NowPlayingMovie from "../components/NowPlayingMovie";
import TopRatedMovie from "../components/TopRatedMovie";
import Banner from "../components/Banner";
import { useDispatch } from "react-redux";
import { appDispatch } from "../store";
import { useEffect } from "react";
import { fetchMovieGenre } from "../store/api/movieApi";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { movieAction } from "../store/moviesSlice";
import MovieList from "../components/MovieList";

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
      <MovieList />
      {/* <div className={`${movieSelected === "popular" ? "visible" : "hidden"} `}>
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
      </div> */}
    </div>
  );
};

export default Home;
