import { ReactNode, useState } from "react";

interface ReadMoreProps {
  maxLength: number;
  children: ReactNode;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, maxLength }) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = useState<boolean>(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {text.length >= maxLength ? (
        <p>
          {isReadMore ? `${text.slice(0, maxLength)}...` : text}
          <span
            onClick={toggleReadMore}
            className="font-bold cursor-pointer mx-2"
          >
            {isReadMore ? "read more" : "show less"}
          </span>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};

export default ReadMore;
