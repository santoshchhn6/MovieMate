import { useDispatch, useSelector } from "react-redux";
import { heading } from "../style/style";
import { RootState, appDispatch } from "../redux";
import { useEffect } from "react";
import { fetchReviews } from "../redux/movie_action";
import { getFormatedDate } from "../date";
import Rating from "./Rating";
import ReadMore from "./ReadMore";
import ImageComponent from "./ImageComponent";

type Props = {
  movieId: number;
};
const Reviews = ({ movieId }: Props) => {
  const reviews = useSelector((state: RootState) => state.review.reviews);
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchReviews(movieId));
  }, [movieId, dispatch]);

  return (
    <div className="p-5">
      <h1 className={heading}>Reviews</h1>
      <div className="grid grid-cols-2 gap-5 px-5">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-3 border-b-2 p-3">
            <div className="flex gap-3">
              <ImageComponent
                src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                className="w-[50px] h-[50px]  rounded-full "
              />
              <div>
                <p className="text-[16px] font-['Poppin-sb']">
                  {review.author}
                </p>
                <p>{getFormatedDate(review.created_at)}</p>
              </div>
            </div>

            <Rating rating={review.author_details.rating} />

            <ReadMore maxLength={250}>{review.content}</ReadMore>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
