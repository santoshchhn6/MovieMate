import { appDispatch } from "..";
import { personAction } from "../personSlice";
import { fetchData } from "./baseApi";

export const fetchPerson = (personId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (personId) {
        const data = await fetchData(`/person/${personId}?`);
        dispatch(personAction.setPerson(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchPersonMovies = (personId: number) => {
  return async (dispatch: appDispatch) => {
    try {
      if (personId) {
        const data = await fetchData(`/person/${personId}?`);
        dispatch(personAction.setPerson(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
