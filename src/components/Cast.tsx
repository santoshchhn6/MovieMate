import ImageComponent from "./ImageComponent";
import { CastProps } from "../type";
import { Link } from "react-router-dom";

type Props = {
  actors: CastProps[];
};

const Cast = ({ actors }: Props) => {
  return (
    <div className="flex gap-[20px]">
      {actors.map((actor) => (
        <Link
          to={`/person/${actor.id}`}
          key={actor.id}
          className="cursor-pointer"
        >
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            className={`min-w-[200px] min-h-[300px] rounded-lg object-contain bg-[#51627E]`}
          />
          <p className="text-[18px] font-['Poppin-sb'] my-2">{actor.name}</p>
          <p>{actor.character}</p>
        </Link>
      ))}
    </div>
  );
};

export default Cast;
