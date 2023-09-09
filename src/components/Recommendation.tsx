import { heading, leftMargin } from "../style/style";
import MovieListWithSlider from "./MovieListWithSlider";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Recommendation = () => {
    const recommendation=useSelector((state:RootState)=>state.movieDetail.recommendations)
  return (
    <>
      <h2 className={heading}>Recommendation</h2>
      <MovieListWithSlider data={recommendation} />
    </>
  );
};

export default Recommendation;
