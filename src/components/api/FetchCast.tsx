import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { heading, leftMargin } from "../../style/style";
import Slider from "../Slider";
import Cast from "../Cast";

const FetchCast = () => {
  const actors = useSelector(
    (state: RootState) => state.movieDetail.credits.cast
  );

  console.log({ actors });

  return (
    <div className={leftMargin}>
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
