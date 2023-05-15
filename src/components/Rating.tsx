import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  const rating = 3;
  return (
    <div className="flex gap-1 text-[20px]">
      {[...Array(5)].map((e, i) => (
        <AiFillStar
          key={i}
          className={rating > i ? "text-yellow-500" : "text-gray-400"}
        />
      ))}
    </div>
  );
};

export default Rating;
