import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../../store";
// import { useEffect } from "react";
// import { fetchCast } from "../redux/movie_action";
import { container, heading } from "../../style/style";
import Slider from "../Slider";
import Cast from "../Cast";

// type Props = {
//   movieId: number;
// };

const FetchCast = () =>
  // { movieId }: Props
  {
    const actors = useSelector(
      (state: RootState) => state.movieDetail.credits.cast
    );
    // const dispatch = useDispatch<appDispatch>();
    // useEffect(() => {
    //   dispatch(fetchCast(movieId));
    // }, [movieId, dispatch]);

    return (
      <div className={container}>
        <h1 className={heading}>Cast</h1>
        <Slider
          dataLength={actors.length}
          poster_width={200}
          poster_height={300 + 70}
          poster_gap={20}
        >
          <Cast actors={actors} />
        </Slider>
      </div>
    );
  };

export default FetchCast;
