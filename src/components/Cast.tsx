import ImageComponent from "./ImageComponent";
import { Actors } from "../type";

type Props = {
  actors: Actors[];
  poster_width?: number;
  poster_height?: number;
  poster_gap?: number;
};

const Cast = ({
  actors,
  poster_height = 300,
  poster_width = 200,
  poster_gap = 20,
}: Props) => {
  return (
    <div className="flex" style={{ gap: `${poster_gap}px` }}>
      {actors.map((actor) => (
        <div key={actor.id} className="">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            className={`min-w-[${poster_width}px] min-h-[${poster_height}px] rounded-lg object-contain bg-[#51627E]`}
          />

          <p className="text-[18px] font-['Poppin-sb'] my-2">{actor.name}</p>
          <p>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
