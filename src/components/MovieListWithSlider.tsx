import { MovieProps } from "../utils/type";
import Poster from "./Poster";
import Slider from "./Slider";

interface Props {
  data: MovieProps[];
}

const MovieListWithSlider = ({ data }: Props) => {
  return (
    <Slider dataLength={data.length}>
      <div className=" flex gap-5">
        {data?.map((movie, i) => (
          <Poster
            key={i}
            id={movie.id}
            title={movie.title}
            width={200}
            height={300}
            poster_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </Slider>
  );
};

export default MovieListWithSlider;
