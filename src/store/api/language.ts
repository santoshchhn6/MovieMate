import { appDispatch } from "..";
import { LanguageAction } from "../languageSlice";
import { fetchData } from "./baseApi";

export const fetchLanguage = () => {
  return async (dispatch: appDispatch) => {
    try {
      const data = await fetchData("/configuration/languages?");
      dispatch(LanguageAction.addLanguages(data));
    } catch (err) {
      console.log(err);
    }
  };
};
