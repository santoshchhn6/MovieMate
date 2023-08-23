import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState, appDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../store/api/personApi";
import { content, heading, heading2, heading3, margin } from "../style/style";
import { getAge, getFormatedDate } from "../utils/date";
import ReadMore from "../components/Buttons/ReadMore";

type PersonInfoType = {
  "Known for": string;
  Popularity: number;
  Birthday: string;
  "Place of birth": string;
  Deathday: string | null;
  Gender: string;
};

const Person = () => {
  const { id } = useParams();
  const dispatch: appDispatch = useDispatch();
  const person = useSelector((state: RootState) => state.personDetail.person);

  const gender = ["Not Specified", "Female", "Male"];
  const [personInfo, setPersonInfo] = useState<PersonInfoType | null>(null);

  useEffect(() => {
    dispatch(fetchPerson(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    setPersonInfo({
      "Known for": person ? person?.known_for_department : "null",
      Popularity: person ? person?.popularity : 0,
      Birthday: getFormatedDate(person ? person?.birthday : "null"),
      "Place of birth": person ? person?.place_of_birth : "null",
      Deathday: person ? person?.deathday : null,
      Gender: gender[person ? person?.gender : 0],
    });
  }, [person]);

  return (
    <div className={margin}>
      <div className="flex my-5 gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w300${person?.profile_path}`}
          className={`w-[300px] h-[450px] rounded-lg object-contain bg-gray-900`}
        />
        <div>
          <p className={heading2}>{person?.name}</p>

          <p className={`font-['OpenSans'] -mt-3 ${heading3}`}>
            Age {getAge(person ? person?.birthday : "")} years
          </p>

          <p className={heading}>Biography</p>
          <p className={`${content}  `}>
            <ReadMore maxLength={800}>
              {person ? person?.biography : ""}
            </ReadMore>
          </p>
        </div>
      </div>

      {/* <div>
        <p>Also known as</p>
        {person?.also_known_as.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div> */}

      <div className="flex my-5 gap-5">
        <div className="w-[300px] ">
          {personInfo
            ? Object.entries(personInfo).map((e, i) => (
                <div key={i} className="mb-3">
                  {e[1] ? (
                    <>
                      <p className="text-[20px] font-['Poppin-sb']">{e[0]}</p>
                      <p className="text-[20px] font-['Poppin']">{e[1]}</p>
                    </>
                  ) : null}
                </div>
              ))
            : null}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Person;
