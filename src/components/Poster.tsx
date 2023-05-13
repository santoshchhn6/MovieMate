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
  vote_average,
}: Props) => {
  return (
    <Link to={`/movie/${id}`}>
      <div
        className={`relative`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
        }}
      >
        <div
          className="relative rounded-xl overflow-hidden hover:border-2 hover:border-blue-700"
          style={{
            minWidth: `${width}px`,
            minHeight: `${height}px`,
          }}
        >
          <img
            src={poster_url}
            alt={`${title} poster`}
            className={`absolute  object-cover `}
            style={{
              minWidth: `${width}px`,
              minHeight: `${height}px`,
            }}
          />

          <div
            className={`absolute  bg-slate-950 opacity-0 hover:opacity-80 text-center cursor-pointer`}
            style={{
              minWidth: `${width}px`,
              minHeight: `${height}px`,
            }}
          >
            <div
              className=" absolute bottom-[40px]"
              style={{ width: `${width}px` }}
            >
              <p className="text-[20px] ">{title}</p>
              <p className="text-[20px] ">{release_date}</p>
            </div>
          </div>
        </div>

        {/* {vote_average ? (
          <p className="absolute left-[80px] bottom-[-15px] w-[50px] h-[50px] rounded-full bg-blue-700 text-[20px] flex justify-center items-center">
            {vote_average.toFixed(1)}
          </p>
        ) : null} */}
      </div>
    </Link>
  );
};

export default Poster;
