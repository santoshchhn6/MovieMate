import Slider from "./components/Slider";
import useWindowSize from "./useWindowSize";

function App() {
  const { width } = useWindowSize();
  return (
    <div className="flex justify-center">
      <div className="border-2 border-blue-500 w-[1440px]">
        <Slider title="Popular" type="popular" width={width} />
        <Slider title="Upcoming" type="upcoming" width={width} />
        <Slider title="Now Playing" type="now_playing" width={width} />
        <Slider title="Top rated" type="top_rated" width={width} />
      </div>
    </div>
  );
}

export default App;
