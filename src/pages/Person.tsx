import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, appDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, fetchPersonKnownForMovies } from "../store/api/personApi";
import {
  content,
  font1,
  font2,
  heading,
  heading2,
  heading3,
  margin,
  profile_picture,
} from "../style/style";
import { getAge } from "../utils/date";
import ReadMore from "../components/Buttons/ReadMore";
import MovieListWithSlider from "../components/MovieListWithSlider";
import { MovieProps } from "../type";

const Person = () => {
  const { id } = useParams();
  const dispatch: appDispatch = useDispatch();
  const { person, knownForMovies } = useSelector(
    (state: RootState) => state.personDetail
  );

  const {
    biography,
    birthday,
    deathday,
    gender,
    known_for_department,
    name,
    place_of_birth,
    popularity,
    profile_path,
  } = person;

  useEffect(() => {
    dispatch(fetchPerson(Number(id)));
    dispatch(fetchPersonKnownForMovies(Number(id)));
  }, [dispatch, id]);

  return (
    <div className={`${margin} pt-24`}>
      {/* Upper half */}
      <div className="flex my-5 gap-5">
        <ProfilePicture
          url={`https://image.tmdb.org/t/p/w300${profile_path}`}
        />
        <PersonBiography
          name={name}
          birthday={birthday}
          biography={biography}
        />
      </div>
      {/* Lower Half */}
      <div className="flex my-5 gap-5">
        <PersonInfo
          known_for_department={known_for_department}
          popularity={popularity}
          birthday={birthday}
          place_of_birth={place_of_birth}
          deathday={deathday}
          gender={gender}
        />
        <PersonHasInMovies movies={knownForMovies} />
      </div>
    </div>
  );
};

function ProfilePicture({ url }: { url: string }) {
  return <img src={url} className={profile_picture} />;
}

function PersonHasInMovies({ movies }: { movies: MovieProps[] }) {
  return (
    <div className="w-[100%]">
      <h2 className={`${heading} mt-0`}>Known For Movies</h2>
      <MovieListWithSlider data={movies} />
    </div>
  );
}

function PersonBiography(person: {
  name: string;
  birthday: string;
  biography: string;
}) {
  return (
    <div>
      <p className={heading2}>{person?.name}</p>

      <p className={`font-['OpenSans'] -mt-3 ${heading3}`}>
        Age {getAge(person?.birthday)} years
      </p>

      <p className={heading}>Biography</p>
      <p className={`${content}  `}>
        <ReadMore maxLength={800}>{person?.biography}</ReadMore>
      </p>
    </div>
  );
}

type PersonInfoProps = {
  known_for_department: string;
  popularity: number;
  birthday: string;
  place_of_birth: string;
  deathday: string | null;
  gender: number;
};

function PersonInfo({
  known_for_department,
  popularity,
  birthday,
  place_of_birth,
  deathday,
  gender,
}: PersonInfoProps) {
  return (
    <div className=" min-w-[300px] ">
      <div>
        <p className={`${font1}`}>Known for </p>
        <p className={`${font2}`}>{known_for_department}</p>
      </div>
      <div>
        <p className={`${font1}`}>Popularity</p>
        <p className={`${font2}`}>{popularity}</p>
      </div>
      <div>
        <p className={`${font1}`}>Birthday</p>
        <p className={`${font2}`}>{birthday}</p>
      </div>
      {deathday && (
        <div>
          <p className={`${font1}`}>Death Day</p>
          <p className={`${font2}`}>{deathday}</p>
        </div>
      )}
      <div>
        <p className={`${font1}`}>Place of birth</p>
        <p className={`${font2}`}>{place_of_birth}</p>
      </div>
      <RederGender gender_id={gender} />
    </div>
  );
}

function RederGender({ gender_id }: { gender_id: number }) {
  const gender = ["Male", "Female", "unkown"];
  return (
    <div>
      <p className={`${font1}`}>Gender</p>
      <p className={`${font2}`}>{gender[gender_id]}</p>
    </div>
  );
}

export default Person;
