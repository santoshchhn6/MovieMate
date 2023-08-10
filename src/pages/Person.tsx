import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, appDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../store/api/personApi";
import ImageComponent from "../components/ImageComponent";

const Person = () => {
  const { id } = useParams();
  const dispatch: appDispatch = useDispatch();
  const person = useSelector((state: RootState) => state.personDetail.person);

  useEffect(() => {
    dispatch(fetchPerson(Number(id)));
  }, [dispatch, id]);

  return (
    <div>
      <div className="flex border gap-5">
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w200${person?.profile_path}`}
          className={`min-w-[200px] min-h-[300px] rounded-lg object-contain bg-[#51627E]`}
        />
        <div>
          <p>{person?.name}</p>
          <p>Biography</p>
          <p>{person?.biography}</p>
        </div>
      </div>

      <div>
        <p>Also known as</p>
        {person?.also_known_as.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div>

      <p>birthday: {person?.birthday}</p>
      <p>deathday: {person?.deathday}</p>
      <p>gender:{person?.gender}</p>
      <p>known for:{person?.known_for_department}</p>
      <p>Place of birth:{person?.place_of_birth}</p>
      <p>Popularity:{person?.popularity}</p>
    </div>
  );
};

export default Person;
