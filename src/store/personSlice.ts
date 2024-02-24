import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieProps, PersonType } from "../type";

type PersonState = {
  person: PersonType;
  knownForMovies: MovieProps[];
};

const initialState: PersonState = {
  person: {
    also_known_as: [],
    biography: "",
    birthday: "",
    deathday: "",
    gender: 0,
    homepage: "",
    id: 0,
    imdb_id: "",
    known_for_department: "",
    name: "",
    place_of_birth: "",
    popularity: 0,
    profile_path: 0,
  },
  knownForMovies: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson(state, action: PayloadAction<PersonType>) {
      state.person = action.payload;
    },
    setKnowFor(state, action: PayloadAction<MovieProps[]>) {
      state.knownForMovies = action.payload;
    },
  },
});

export const personAction = personSlice.actions;
export default personSlice;
