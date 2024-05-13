import { GenreProps } from "../type";

const MovieGenre = ({ genres }: { genres: (GenreProps | undefined)[] }) => {
  return (
    <div className="flex flex-wrap gap-3  font-['SansPro'] cursor-pointer">
      {genres?.map((genre) => (
        <span
          key={genre?.id}
          className="bg-blue-500/50 text-[1em]  px-3 py-0.5  rounded-xl hover:bg-blue-500 ease-out duration-100"
        >
          {genre?.name}
        </span>
      ))}
    </div>
  );
};

export default MovieGenre;

// const MovieGenre = ({ movie }: { movie: MovieProps }) => {
//     const genres = useSelector((state: RootState) => state.movies.genres);
//     return (
//       <div className="flex gap-3 text-[18px] font-['SansPro-sb'] my-3 cursor-pointer">
//         {movie.genre_ids?.map((id, index) => (
//           <span
//             key={index}
//             className="border border-blue-600 px-3 rounded-full bg-black/90"
//           >
//             {
//               genres.find(
//                 (genre: { id: number; name: string }) => genre.id === id
//               )?.name
//             }
//           </span>
//         ))}
//       </div>
//     );
//   };
