import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import useScrollToTop from "../utils/hooks/useScrollToTop";

interface Props {
  id: number;
  title: string;
  poster_url: string;
  width: number;
  height: number;
  release_date: string;
  vote_average: number | null;
}

const Poster = ({
  id,
  title,
  poster_url,
  width,
  height,
  release_date,
  vote_average,
}: Props) => {
  const { scrollToTop } = useScrollToTop();
  return (
    <Link
      to={`/movie/${id}`}
      className="relative justify-self-center rounded-xl overflow-hidden hover:scale-110 ease-in-out duration-300"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={scrollToTop}
    >
      <ImageComponent
        src={poster_url}
        alt={`${title} poster`}
        className={`absolute  object-cover `}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />

      <div className="absolute bottom-0 left-0 bg-white rounded-full p-2 border-4 border-blue-600">
        <span>{vote_average ? vote_average.toFixed(1) : null}</span>
      </div>

      {/* <div
        className={`absolute p-2 flex flex-col justify-end  bg-slate-950 opacity-0 hover:opacity-80 text-center cursor-pointer`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
        }}
      >
        <p className="text-[20px] ">{title}</p>
        <p className="text-[20px] ">{release_date}</p>
      </div> */}
    </Link>
  );
};

export default Poster;
