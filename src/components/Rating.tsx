import { AiFillStar } from "react-icons/ai";

interface Props {
  rating: number;
}
const Rating = ({ rating = 0 }: Props) => {
  const stars = Math.round(0.5 * rating);
  return (
    <div className="flex gap-1 text-[20px]">
      {[...Array(5)].map((e, i) => (
        <AiFillStar
          key={i}
          className={stars > i ? "text-yellow-500" : "text-gray-400"}
        />
      ))}
    </div>
  );
};

export default Rating;
