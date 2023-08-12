import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, appDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../store/api/personApi";
import ImageComponent from "../components/ImageComponent";
import { content, heading, heading2, heading3, margin } from "../style/style";
import { getAge, getFormatedDate } from "../utils/date";

const Person = () => {
  const { id } = useParams();
  const dispatch: appDispatch = useDispatch();
  const person = useSelector((state: RootState) => state.personDetail.person);

  useEffect(() => {
    dispatch(fetchPerson(Number(id)));
  }, [dispatch, id]);

  return (
    <div className={margin}>
      <div className="flex my-5 gap-5">
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w300${person?.profile_path}`}
          className={`min-w-[300px] min-h-[450px] rounded-lg object-contain bg-gray-900`}
        />
        <div>
          <p className={heading2}>{person?.name}</p>

          <p className={`font-['OpenSans'] -mt-3 ${heading3}`}>
            Age {getAge(person ? person?.birthday : "")} years
          </p>

          <p className={heading}>Biography</p>
          <p className={content}>{person?.biography}</p>
        </div>
      </div>

      <div>
        <p>Also known as</p>
        {person?.also_known_as.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div>

      <p>birthday: {getFormatedDate(person ? person?.birthday : "")}</p>
      <p>deathday: {person?.deathday}</p>
      <p>gender:{person?.gender}</p>
      <p>known for:{person?.known_for_department}</p>
      <p>Place of birth:{person?.place_of_birth}</p>
      <p>Popularity:{person?.popularity}</p>
    </div>
  );
};

export default Person;
