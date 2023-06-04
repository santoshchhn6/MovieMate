import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux";
import { fetchCast } from "../redux/movie_action";

type Props = {
  movieId: number;
};

const Cast = ({ movieId }: Props) => {
  const actors = useSelector((state: RootState) => state.cast.actors);
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchCast(movieId));
  }, [movieId, dispatch]);

  return (
    <div>
      <h2>Cast</h2>
      <div>
        {actors.map((actor) => (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
