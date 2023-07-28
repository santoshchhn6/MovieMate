import { useDispatch, useSelector } from "react-redux";
import { container, heading } from "../style/style";
import { RootState, appDispatch } from "../store";
import { useEffect, useState } from "react";
// import { fetchReviews } from "../redux/movie_action";
import { getFormatedDate } from "../utils/date";
import Rating from "./Rating";
import ReadMore from "./ReadMore";
import ImageComponent from "./ImageComponent";
import ButtonExit from "./Buttons/ButtonExit";
import { ReviewProps } from "../utils/type";

// type Props = {
//   movieId: number;
// };
const Reviews = () =>
  // { movieId }: Props
  {
    const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
    const reviews = useSelector(
      (state: RootState) => state.movieDetail.reviews
    );
    const movie = useSelector((state: RootState) => state.movieDetail.details);
    // const dispatch = useDispatch<appDispatch>();
    // useEffect(() => {
    //   dispatch(fetchReviews(movieId));
    // }, [movieId, dispatch]);

    const toggleShowAllReviews = () => {
      setShowAllReviews((showAllReviews) => !showAllReviews);
    };

    return (
      <div className={`${container} `}>
        <h1 className={heading}>Reviews</h1>
        {reviews.length ? (
          !showAllReviews ? (
            <div className="border w-[60%] relative rounded-xl">
              <SingleReview review={reviews[0]} />
              <button
                className="absolute bottom-[-15px] left-[40%] bg-blue-600 text-[18px] font-['Poppin-sb'] p-1 px-5 rounded-full hover:bg-blue-500 "
                onClick={toggleShowAllReviews}
              >
                All reviews
              </button>
            </div>
          ) : (
            <div className=" w-[60%] h-[70%] fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   bg-gray-900 rounded-lg overflow-hidden">
              <div className=" flex justify-between bg-gray-800">
                <span className="ml-5 mt-2 text-[20px] font-['Poppin-sb']">
                  {movie?.title}
                </span>
                <ButtonExit onClick={toggleShowAllReviews} />
              </div>
              <div className=" h-[90%] flex flex-col gap-5 px-5 overflow-auto ">
                {reviews.map((review) => (
                  <SingleReview key={review.id} review={review} />
                ))}
              </div>
            </div>
          )
        ) : (
          <span>No reviews</span>
        )}
      </div>
    );
  };

type SingleReviewProps = {
  review: ReviewProps;
};
const SingleReview = ({ review }: SingleReviewProps) => (
  <div className=" flex flex-col gap-3 border-b-2 p-3">
    <div className="flex gap-3">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w200${review?.author_details.avatar_path}`}
        className="w-[50px] h-[50px]  rounded-full "
      />
      <div>
        <p className="text-[16px] font-['Poppin-sb']">{review?.author}</p>
        <p>{getFormatedDate(review ? review.created_at : "")}</p>
      </div>
    </div>

    <Rating rating={review ? review.author_details.rating : 0} />

    <ReadMore maxLength={250}>{review ? review.content : 0}</ReadMore>
  </div>
);

export default Reviews;
