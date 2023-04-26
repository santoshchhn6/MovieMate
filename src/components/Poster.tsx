interface Props {
  title: string;
  poster_url: string;
  backdrop_url: string;
  width: number;
  height: number;
  release_date: string;
  vote_average: number;
}

const Poster = ({
  title,
  poster_url,
  backdrop_url,
  width,
  height,
  release_date,
  vote_average,
}: Props) => {
  return (
    <div className={`cursor-pointer hover:border-2 border-blue-500`}>
      <img
        src={poster_url}
        alt={`${title} poster`}
        className={`rounded-xl object-cover cursor-pointer`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
        }}
      />

      {/* <div
        // src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        // alt={`${movie.title} poster`}
        className={`border rounded-xl object-cover  hover:bg-[url(${backdrop_url})] cursor-pointer`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
          backgroundImage: `url(${poster_url})`,
        }}
      ></div> */}
      <div className=" relative">
        <p className="absolute  w-[160px] h-[30px] rounded-l-2xl p-1 pl-[20px] bg-white text-gray-800 font-bold">
          {release_date}
        </p>
        <p className="absolute left-[155px] top-[-10px] w-[50px] h-[50px] rounded-full bg-blue-700 text-[20px] flex justify-center items-center">
          {vote_average}
        </p>
      </div>
    </div>
  );
};

export default Poster;
