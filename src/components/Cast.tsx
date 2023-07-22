import ImageComponent from "./ImageComponent";
import { Actors } from "../type";

type Props = {
  actors: Actors[];
};

const Cast = ({ actors }: Props) => {
  return (
    <div className="flex gap-[20px]">
      {actors.map((actor) => (
        <div key={actor.id} className="">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            className={`min-w-[200px] min-h-[300px] rounded-lg object-contain bg-[#51627E]`}
          />
          <p className="text-[18px] font-['Poppin-sb'] my-2">{actor.name}</p>
          <p>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
