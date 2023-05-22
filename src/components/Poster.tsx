import { Link } from "react-router-dom";

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
}: Props) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="relative justify-self-center rounded-xl overflow-hidden hover:border-2 hover:border-blue-700"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <img
        src={poster_url}
        alt={`${title} poster`}
        className={`absolute  object-cover `}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />

      <div
        className={`absolute p-2 flex flex-col justify-end  bg-slate-950 opacity-0 hover:opacity-80 text-center cursor-pointer`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
        }}
      >
        <p className="text-[20px] ">{title}</p>
        <p className="text-[20px] ">{release_date}</p>
      </div>
    </Link>
  );
};

export default Poster;
